package com.example.server.account.supervisor;

import com.example.server.account.Account;
import com.example.server.yearbook.data.Yearbook;

import javax.persistence.*;

@Entity
@Table(name = "supervisor")
public class Supervisor {
    private Long id;
    private String name;
    private String contact;
    private Boolean isViber = Boolean.FALSE;
    private Boolean isTelegram = Boolean.FALSE;

    private Yearbook yearbook;

    private Account account;

    public Supervisor(String name,
                      String contact,
                      Boolean isViber,
                      Boolean isTelegram,
                      Yearbook yearbook) {
        this.name = name;
        this.contact = contact;
        this.isViber = isViber;
        this.isTelegram = isTelegram;
        this.yearbook = yearbook;
    }

    public Supervisor(Long id,
                      String name,
                      String contact,
                      Boolean isViber,
                      Boolean isTelegram,
                      Yearbook yearbook) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.isViber = isViber;
        this.isTelegram = isTelegram;
        this.yearbook = yearbook;
    }

    public Supervisor() {
    }

    @Id
    @Column(name = "id", nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "contact")
    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    @Column(name = "is_viber", nullable = false)
    public boolean isViber() {
        return isViber;
    }

    public void setViber(boolean viber) {
        isViber = viber;
    }

    @Column(name = "is_telegram", nullable = false)
    public boolean isTelegram() {
        return isTelegram;
    }

    public void setTelegram(boolean telegram) {
        isTelegram = telegram;
    }

    @ManyToOne(optional=false, cascade=CascadeType.ALL)
    @JoinColumn(name = "yearbook_id")
    public Yearbook getYearbook() {
        return yearbook;
    }

    public void setYearbook(Yearbook yearbook) {
        this.yearbook = yearbook;
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
}
