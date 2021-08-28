package com.example.server.portrait;

import javax.persistence.*;

@Entity
@Table(name = "portrait")
public class Portrait {
    private Long id;
    private String url;
    private String fileName;
    private Long yearbookId;//TODO fk
    private Long studentId;//TODO fk

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

    @Column(name = "yearbook_id", nullable = false)
    public Long getYearbookId() {
        return yearbookId;
    }

    public void setYearbookId(Long yearbookId) {
        this.yearbookId = yearbookId;
    }

    @Column(name = "student_id")
    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Portrait(String url,
                    String file_name,
                    Long yearbookId,
                    Long studentId) {
        this.url = url;
        this.fileName = file_name;
        this.yearbookId = yearbookId;
        this.studentId = studentId;
    }

    public Portrait(Long id,
                    String url,
                    String file_name,
                    Long yearbookId,
                    Long studentId) {
        this.id = id;
        this.url = url;
        this.fileName = file_name;
        this.yearbookId = yearbookId;
        this.studentId = studentId;
    }

    public Portrait() {
    }
}
