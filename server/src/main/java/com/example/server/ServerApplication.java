package com.example.server;

import com.example.server.account.student.StudentRepository;
import com.example.server.account.supervisor.SupervisorRepository;
import com.example.server.portrait.PortraitRepository;
import com.example.server.yearbook.ClassRepository;
import com.example.server.yearbook.YearbookRepository;
import com.example.server.yearbook.type.YearbookTypeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(YearbookRepository yearbookRepository,
										YearbookTypeRepository yearbookTypeRepository,
										SupervisorRepository supervisorRepository,
										PortraitRepository portraitRepository,
										ClassRepository classRepository,
										StudentRepository studentRepository){
		return args -> {
			System.err.println(passwordEncoder().encode("student"));
			System.err.println(passwordEncoder().encode("supervisor"));
		};
	}

	@Bean//FIXME this was just password encoder
	BCryptPasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

}
