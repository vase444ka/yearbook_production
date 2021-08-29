package com.example.server;

import com.example.server.account.Account;
import com.example.server.account.photographer.Photographer;
import com.example.server.account.photographer.PhotographerRepository;
import com.example.server.account.AccountRepository;
import com.example.server.account.student.Student;
import com.example.server.account.student.StudentRepository;
import com.example.server.account.supervisor.Supervisor;
import com.example.server.account.supervisor.SupervisorRepository;
import com.example.server.portrait.Portrait;
import com.example.server.portrait.PortraitRepository;
import com.example.server.yearbook.data.Class;
import com.example.server.yearbook.data.ClassRepository;
import com.example.server.yearbook.data.Yearbook;
import com.example.server.yearbook.data.YearbookRepository;
import com.example.server.yearbook.type.YearbookType;
import com.example.server.yearbook.type.YearbookTypeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

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

		};
	}

}
