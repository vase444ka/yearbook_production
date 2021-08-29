package com.example.server.yearbook.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/v1/yearbook-types")
public class YearbookTypeController {

    private final YearbookTypeService yearbookTypeService;

    @Autowired
    public YearbookTypeController(YearbookTypeService yearbookTypeService){
        this.yearbookTypeService = yearbookTypeService;
    }

    @PostMapping
    public ResponseEntity<YearbookType> CreateYearbookType(@RequestBody YearbookType yearbookType){
        Optional<YearbookType> created = yearbookTypeService.createYearbookType(yearbookType);
        return created.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().body(null));
    }

    /*@GetMapping(path="{yearbookTypeId}")
    public ResponseEntity<YearbookType> GetYearbookType(){
        Optional<YearbookType> created = yearbookTypeService.getYearbookType(id);
        return created.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().body(null));
    }*/
}
