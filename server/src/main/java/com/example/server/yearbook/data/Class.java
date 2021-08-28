package com.example.server.yearbook.data;

import javax.persistence.*;

@Entity
@Table(name = "class")
public class Class {
    private Long id;
    private Integer grade;
    private String name;
    private String school;
    private Integer version;

    private Yearbook yearbook;

    public Class(Long id, Integer grade, String name, String school, Integer version, Yearbook yearbook) {
        this.id = id;
        this.grade = grade;
        this.name = name;
        this.school = school;
        this.version = version;
        this.yearbook = yearbook;
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

    //@OneToOne(mappedBy = "aClass", cascade = CascadeType.ALL)
    //@PrimaryKeyJoinColumn
    public Yearbook getYearbook() {
        return yearbook;
    }

    public void setYearbook(Yearbook yearbook) {
        this.yearbook = yearbook;
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

    @Column(name = "version", nullable = false)
    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }
}
