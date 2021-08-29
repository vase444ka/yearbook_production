package com.example.server.yearbook.type;

import com.example.server.account.photographer.Photographer;
import com.example.server.account.photographer.PhotographerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    Optional<YearbookType> createYearbookType(YearbookType yearbookType){
        return photographerRepository.existsById(yearbookType.getPhotographerId()) ?
                Optional.of(yearbookTypeRepository.save(yearbookType)) : Optional.empty();
    }

    Optional<YearbookType> getYearbookType(Long id){
        return yearbookTypeRepository.findById(id);
    }
}
