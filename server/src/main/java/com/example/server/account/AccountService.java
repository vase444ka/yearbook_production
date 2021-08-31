package com.example.server.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class AccountService implements UserDetailsService {
    private final AccountRepository accountRepository;

    @Autowired
    public AccountService(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Account account = accountRepository.findAccountByUserName(userName);
        if (account == null){
            throw new UsernameNotFoundException("User not found in the database");
        }
        else {
            System.err.println("User found");
        }
        Collection<SimpleGrantedAuthority> permissions = new ArrayList<>();
        //get the names of roles
        return new User(account.getUserName(), account.getPasswordHash(), permissions);
    }
}
