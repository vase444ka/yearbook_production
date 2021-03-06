package com.example.server.yearbook;

import javax.persistence.*;

@Entity
@Table(name = "class")
public class Class {
    private Long id;
    private Integer grade;
    private String name;
    private String school;

    public Class(Integer grade, String name, String school, Integer version) {
        this.grade = grade;
        this.name = name;
        this.school = school;
    }

    public Class(Long id, Integer grade, String name, String school, Integer version) {
        this.id = id;
        this.grade = grade;
        this.name = name;
        this.school = school;
    }

    public Class() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "grade", nullable = false)
    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "school")
    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    @Override
    public String toString() {
        return "Class{" +
                "id=" + id +
                ", grade=" + grade +
                ", name='" + name + '\'' +
                ", school='" + school + '\'' +
                '}';
    }
}
