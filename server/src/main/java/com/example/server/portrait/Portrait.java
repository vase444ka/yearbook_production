package com.example.server.portrait;

import com.example.server.account.student.Student;
import com.example.server.yearbook.data.Yearbook;

import javax.persistence.*;

@Entity
@Table(name = "portrait")
public class Portrait {
    private Long id;
    private String url;
    private String fileName;

    private Yearbook yearbook;

    private Student student;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "url", nullable = false)
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Column(name = "file_name", nullable = false)
    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    @ManyToOne(optional=false, cascade=CascadeType.MERGE)
    @JoinColumn(name = "yearbook_id")
    public Yearbook getYearbook() {
        return yearbook;
    }

    public void setYearbook(Yearbook yearbook) {
        this.yearbook = yearbook;
    }

    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(name = "student_id")
    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Portrait(String url,
                    String file_name,
                    Yearbook yearbook,
                    Student student) {
        this.url = url;
        this.fileName = file_name;
        this.yearbook = yearbook;
        this.student = student;
    }

    public Portrait(Long id,
                    String url,
                    String file_name,
                    Yearbook yearbook,
                    Student student) {
        this.id = id;
        this.url = url;
        this.fileName = file_name;
        this.yearbook = yearbook;
        this.student = student;
    }

    public Portrait() {
    }
}
