package com.example.server.account.student;


import com.example.server.account.Account;
import com.example.server.yearbook.data.Class;

import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {
    private Long id;//FIXME maybe it needs to be bidirectional
    private String firstName;
    private String lastName;
    private String quote;
    private Boolean didChoosePortrait = Boolean.FALSE;
    private Long classId;

    private Account account;

    @Id
    @Column(name = "id", nullable = false, unique = true, updatable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "quote")
    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    @Column(name = "chose_portrait", nullable = false)
    public Boolean getDidChoosePortrait() {
        return didChoosePortrait;
    }

    public void setDidChoosePortrait(Boolean chosePortrait) {
        this.didChoosePortrait = chosePortrait;
    }

    @OneToOne(optional = false, cascade=CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "id")
    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Column(name = "class_id", nullable = false)
    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public Student(String firstName,
                   String lastName,
                   String quote,
                   Boolean chosePortrait,
                   Long classId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.quote = quote;
        this.didChoosePortrait = chosePortrait;
        this.classId = classId;
    }

    public Student(Long id,
                   String firstName,
                   String lastName,
                   String quote,
                   Boolean chosePortrait,
                   Long classId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.quote = quote;
        this.didChoosePortrait = chosePortrait;
        this.classId = classId;
    }

    public Student() {
    }
}
