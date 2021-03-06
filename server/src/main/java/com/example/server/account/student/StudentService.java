package com.example.server.account.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.example.server.yearbook.ClassRepository;


import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final ClassRepository classRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public StudentService(StudentRepository studentRepository,
                          ClassRepository classRepository,
                          PasswordEncoder passwordEncoder){
        this.studentRepository = studentRepository;
        this.classRepository = classRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Student CreateStudent(Student student){
        if (!classRepository.existsById(student.getClassId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            student.getAccount().setPasswordHash(
                    passwordEncoder.encode(student.getAccount().getPasswordHash()));
            return studentRepository.save(student);
        }
    }

    public List<Student> CreateStudentsBatch(List<Student> students){
        return studentRepository.saveAll(students);
    }

    public Student GetStudent(Long id){
        Optional<Student> result = studentRepository.findById(id);
        if (result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        else{
            result.get().getAccount().setPasswordHash(null);//FIXME
            return result.get();
        }
    }

    public List<Student> QueryStudents(Long id){
        return studentRepository.findStudentsByClassId(id);
    }

    public Student UpdateStudent(Student student){
        if (!studentRepository.existsById(student.getId()) ||
                !classRepository.existsById(student.getClassId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        else {
            student.getAccount().setUpdated(Timestamp.valueOf(LocalDateTime.now()));
            return studentRepository.save(student);
        }
    }

    public void DeleteStudent(Long id){
        if(studentRepository.existsById(id)){
            studentRepository.deleteById(id);
        }
        else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
}
