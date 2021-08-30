package com.example.server.yearbook;

import com.example.server.account.supervisor.Supervisor;
import com.example.server.yearbook.type.YearbookTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class YearbookService {
    private final YearbookRepository yearbookRepository;
    private final YearbookTypeRepository yearbookTypeRepository;
    private final ClassRepository classRepository;

    @Autowired
    public YearbookService(YearbookRepository yearbookRepository,
                           YearbookTypeRepository yearbookTypeRepository,
                           ClassRepository classRepository){
        this.yearbookRepository = yearbookRepository;
        this.yearbookTypeRepository = yearbookTypeRepository;
        this.classRepository = classRepository;
    }

    public Yearbook CreateYearbook(Yearbook yearbook){
        if (!yearbookTypeRepository.existsById(yearbook.getYearbookType().getId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            return yearbookRepository.save(yearbook);
        }
    }

    public Yearbook GetYearbook(Long id){
        Optional<Yearbook> result = yearbookRepository.findById(id);
        if (result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        else{
            return result.get();
        }
    }

    public List<Yearbook> QueryYearbooks(Long id){
        return yearbookRepository.FindAllWithDescriptionQuery(id);
    }

    public Yearbook UpdateYearbook(Yearbook yearbook){
        if (!yearbookTypeRepository.existsById(yearbook.getYearbookType().getId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            yearbook.setUpdated(Timestamp.valueOf(LocalDateTime.now()));
            return yearbookRepository.save(yearbook);
        }
    }

    public Class UpdateClass(Class aClass){
        if (!classRepository.existsById(aClass.getId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            return classRepository.save(aClass);
        }
    }

    public void DeleteYearbook(Long id){
        if(yearbookRepository.existsById(id)){
            yearbookTypeRepository.deleteById(id);
        }
        else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
}
