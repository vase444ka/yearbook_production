package com.example.server.account;

import com.example.server.account.photographer.PhotographerRepository;
import com.example.server.account.student.StudentRepository;
import com.example.server.account.supervisor.SupervisorRepository;
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
    private final StudentRepository studentRepository;
    private final SupervisorRepository supervisorRepository;
    private final PhotographerRepository photographerRepository;

    @Autowired
    public AccountService(AccountRepository accountRepository,
                          StudentRepository studentRepository,
                          SupervisorRepository supervisorRepository,
                          PhotographerRepository photographerRepository) {
        this.accountRepository = accountRepository;
        this.studentRepository = studentRepository;
        this.supervisorRepository = supervisorRepository;
        this.photographerRepository = photographerRepository;
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

        if (studentRepository.existsById(account.getId()))
            permissions.add(new SimpleGrantedAuthority(Account.Roles.ROLE_STUDENT.name()));
        if (supervisorRepository.existsById(account.getId()))
            permissions.add(new SimpleGrantedAuthority(Account.Roles.ROLE_SUPERVISOR.name()));
        if (photographerRepository.existsById(account.getId()))
            permissions.add(new SimpleGrantedAuthority(Account.Roles.ROLE_PHOTOGRAPHER.name()));

        return new User(account.getId().toString(), account.getPasswordHash(), permissions);
    }
}
