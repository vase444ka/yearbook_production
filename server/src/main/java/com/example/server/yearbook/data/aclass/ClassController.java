package com.example.server.yearbook.data.aclass;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/class")
public class ClassController {

    private final ClassService classService;

    @Autowired
    public ClassController(ClassService classService){
        this.classService = classService;
    }
}
