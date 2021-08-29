package com.example.server.yearbook.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
    public YearbookType CreateYearbookType(@RequestBody YearbookType yearbookType){
        return yearbookTypeService.createYearbookType(yearbookType);
    }

    @GetMapping(path="{yearbookTypeId}")
    public YearbookType GetYearbookType(@PathVariable("yearbookTypeId") Long id){
        return yearbookTypeService.getYearbookType(id);
    }

    @GetMapping(path = "/query")
    public List<YearbookType> QueryYearbookTypes(@RequestParam("photographer_id") Long id){
        return yearbookTypeService.QueryYearbookTypes(id);
    }

    @DeleteMapping(path="{yearbookTypeId}")
    public void DeleteYearbookType(@PathVariable("yearbookTypeId") Long id){
        yearbookTypeService.DeleteYearbookType(id);
    }

    @PutMapping
    public YearbookType UpdateYearbookType(@RequestBody YearbookType yearbookType){
        return yearbookTypeService.UpdateYearbookType(yearbookType);
    }
}
