package com.example.server.yearbook.data;

import org.springframework.beans.factory.annotation.Autowired;

public class YearbookService {
    private final YearbookRepository yearbookRepository;

    @Autowired
    public YearbookService(YearbookRepository yearbookRepository){
        this.yearbookRepository = yearbookRepository;
    }
}
