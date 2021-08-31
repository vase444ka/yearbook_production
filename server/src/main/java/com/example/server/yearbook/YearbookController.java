package com.example.server.yearbook;

import com.example.server.yearbook.type.YearbookType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/yearbooks")
public class YearbookController {
    private final YearbookService yearbookService;

    @Autowired
    public YearbookController(YearbookService yearbookService){
        this.yearbookService = yearbookService;
    }

    @PostMapping
    public Yearbook CreateYearbook(@RequestBody Yearbook yearbook){
        return yearbookService.CreateYearbook(yearbook);
    }

    @GetMapping(path="{yearbookId}")
    public Yearbook GetYearbook(@PathVariable("yearbookId") Long id){
        return yearbookService.GetYearbook(id);
    }

    @GetMapping(path = "/query")
    public List<Yearbook> QueryYearbooks(@RequestParam("photographer_id") Long id){
        return yearbookService.QueryYearbooks(id);
    }

    @PutMapping(path="/{id}")
    public Yearbook UpdateYearbook(@RequestBody Yearbook yearbook, @PathVariable("id") Long id){
        yearbook.setId(id);
        return yearbookService.UpdateYearbook(yearbook);
    }

    @DeleteMapping(path="{yearbookId}")
    public void DeleteYearbook(@PathVariable("yearbookId") Long id){
        yearbookService.DeleteYearbook(id);
    }
}
