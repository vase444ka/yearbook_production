package com.example.server.yearbook.type;

import com.example.server.account.photographer.PhotographerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class YearbookTypeService {
    private final YearbookTypeRepository yearbookTypeRepository;
    private final PhotographerRepository photographerRepository;

    @Autowired
    public YearbookTypeService(YearbookTypeRepository yearbookTypeRepository,
                               PhotographerRepository photographerRepository){
        this.yearbookTypeRepository = yearbookTypeRepository;
        this.photographerRepository = photographerRepository;
    }

    YearbookType CreateYearbookType(YearbookType yearbookType){
        if (!photographerRepository.existsById(yearbookType.getPhotographerId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            return yearbookTypeRepository.save(yearbookType);
        }
    }

    public YearbookType GetYearbookType(Long id){
        Optional<YearbookType> result = yearbookTypeRepository.findById(id);
        if (result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "YearbookType with this id does not exist");
        }
        else{
            return result.get();
        }
    }

    public List<YearbookType> QueryYearbookTypes(Long id){
        return yearbookTypeRepository.findYearbookTypeByPhotographerId(id);
    }

    public YearbookType UpdateYearbookType(YearbookType yearbookType){
        if (!yearbookTypeRepository.existsById(yearbookType.getId()) ||
            !photographerRepository.existsById(yearbookType.getPhotographerId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            return yearbookTypeRepository.save(yearbookType);
        }
    }

    public void DeleteYearbookType(Long id){
        if(yearbookTypeRepository.existsById(id)){
            yearbookTypeRepository.deleteById(id);
        }
        else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "YearbookType to delete does not exist");
        }
    }
}
