package com.example.server;

import com.example.server.account.Account;
import com.example.server.account.AccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(AccountRepository accountRepository){
		return args -> {
			accountRepository.save(new Account("username", "passwordHash",
					Timestamp.valueOf(LocalDateTime.now()),
					Timestamp.valueOf(LocalDateTime.now()),
					null));
		};
	}
}
