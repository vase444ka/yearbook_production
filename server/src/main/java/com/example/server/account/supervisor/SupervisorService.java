package com.example.server.account.supervisor;

import com.example.server.yearbook.YearbookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SupervisorService {
    private SupervisorRepository supervisorRepository;
    private YearbookRepository yearbookRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public SupervisorService(SupervisorRepository supervisorRepository,
                             YearbookRepository yearbookRepository,
                             PasswordEncoder passwordEncoder){
        this.supervisorRepository = supervisorRepository;
        this.yearbookRepository = yearbookRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Supervisor CreateSupervisor(Supervisor supervisor){
        if (!yearbookRepository.existsById(supervisor.getYearbookId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            supervisor.getAccount().setPasswordHash(
                    passwordEncoder.encode(supervisor.getAccount().getPasswordHash()));
            return supervisorRepository.save(supervisor);
        }
    }

    public Supervisor GetSupervisor(Long id){
        Optional<Supervisor> result = supervisorRepository.findById(id);
        if (result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        else{
            result.get().getAccount().setPasswordHash(null);//FIXME
            return result.get();
        }
    }

    public List<Supervisor> QuerySupervisors(Long id){
        return supervisorRepository.findSupervisorsByYearbookId(id);
    }

    public Supervisor UpdateSupervisor(Supervisor supervisor){
        if (!supervisorRepository.existsById(supervisor.getId()) ||
                !yearbookRepository.existsById(supervisor.getYearbookId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            supervisor.getAccount().setUpdated(Timestamp.valueOf(LocalDateTime.now()));
            return supervisorRepository.save(supervisor);
        }
    }

    public void DeleteSupervisor(Long id){
        if(supervisorRepository.existsById(id)){
            supervisorRepository.deleteById(id);
        }
        else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
}
