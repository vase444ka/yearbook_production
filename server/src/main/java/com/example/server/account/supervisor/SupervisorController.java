package com.example.server.account.supervisor;

import com.example.server.account.student.Student;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/supervisors")
public class SupervisorController {
    private final SupervisorService supervisorService;

    public SupervisorController(SupervisorService supervisorService){
        this.supervisorService = supervisorService;
    }

    @PostMapping
    public Supervisor CreateSupervisor(@RequestBody Supervisor supervisor){
        return supervisorService.CreateSupervisor(supervisor);
    }

    @GetMapping(path="{supervisorId}")
    public Supervisor GetSupervisor(@PathVariable("supervisorId") Long id){
        return supervisorService.GetSupervisor(id);
    }

    @GetMapping(path = "/query")
    public List<Supervisor> QuerySupervisors(@RequestParam("yearbook_id") Long id){
        return supervisorService.QuerySupervisors(id);
    }

    @DeleteMapping(path="{supervisorId}")//TODO delete testing
    public void DeleteSupervisor(@PathVariable("supervisorId") Long id){
        supervisorService.DeleteSupervisor(id);
    }

    @PutMapping
    public Supervisor UpdateSupervisor(@RequestBody Supervisor supervisor){//TODO partial updates(merging new entity with existing)
        return supervisorService.UpdateSupervisor(supervisor);
    }


}
