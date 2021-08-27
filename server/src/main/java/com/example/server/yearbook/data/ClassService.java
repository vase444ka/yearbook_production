package com.example.server.yearbook.data;

import org.springframework.stereotype.Service;

@Service
public class ClassService {

    public String getClasses(){
        return ("Blyattt");
        /*return List.of(Class.newBuilder()
                .setGrade(11)
                .setName("A")
                .setSchool("117 Ukrainky")
                .setVersion(1)
                .setId(1)
                .build());*/
    }
}
