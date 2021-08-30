package com.example.server.account.student;

import com.example.server.yearbook.type.YearbookType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/students")
public class StudentController {
    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @PostMapping
    public Student CreateStudent(@RequestBody Student student){
        return studentService.CreateStudent(student);
    }

    @PostMapping(path="/create-batch")
    public List<Student> CreateStudentsBatch(@RequestBody List<Student> students){
        return studentService.CreateStudentsBatch(students);
    }

    @GetMapping(path="{studentId}")
    public Student GetStudent(@PathVariable("studentId") Long id){
        return studentService.GetStudent(id);
    }

    @GetMapping(path = "/query")
    public List<Student> QueryStudents(@RequestParam("class_id") Long id){
        return studentService.QueryStudents(id);
    }

    @DeleteMapping(path="{studentId}")
    public void DeleteStudent(@PathVariable("studentId") Long id){
        studentService.DeleteStudent(id);
    }

    @PutMapping
    public Student UpdateStudent(@RequestBody Student student){
        return studentService.UpdateStudent(student);
    }
}
