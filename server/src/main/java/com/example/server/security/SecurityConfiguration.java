package com.example.server.security;

import com.example.server.account.Account;
import com.example.server.filter.MyAuthenticationFilter;
import com.example.server.filter.MyAuthorizationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.*;

//configures how security will work
@Configurable
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public SecurityConfiguration(UserDetailsService userDetailsService,
                                 BCryptPasswordEncoder bCryptPasswordEncoder){
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    private void pathSpecs(HttpSecurity http) throws Exception{
        //hasAnyAuthority - checks if token belongs to any of given roles

        http.authorizeRequests().antMatchers(DELETE).denyAll();
        http.authorizeRequests().antMatchers(GET, "/v1/students/**")
                .hasAnyAuthority("ROLE_PHOTOGRAPHER",
                        "ROLE_SUPERVISOR",
                        "ROLE_STUDENT");


    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }//builds authmanager with given attrs that will be used later in filter
    //defines policies and adds handlers for auth stuff
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        MyAuthenticationFilter myAuthFilter = new MyAuthenticationFilter(authenticationManagerBean());
        myAuthFilter.setFilterProcessesUrl("/v1/accounts/authenticate");
        http.csrf().disable();//order matters
        http.sessionManagement().sessionCreationPolicy(STATELESS);

        http.authorizeRequests().antMatchers("/v1/accounts/authenticate").permitAll();
        pathSpecs(http);
        http.authorizeRequests().anyRequest().authenticated();

        http.addFilter(myAuthFilter);
        http.addFilterBefore(new MyAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
