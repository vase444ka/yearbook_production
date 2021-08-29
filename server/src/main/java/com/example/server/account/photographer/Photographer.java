package com.example.server.account.photographer;

import com.example.server.account.Account;

import javax.persistence.*;

@Entity
@Table(name = "photographer")
public class Photographer {
    private Long id;

    private Account account;

    @Id
    @GeneratedValue
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Photographer() {
    }

    public Photographer(Long id, Account account) {
        this.account = account;
        this.id = id;
    }

    public Photographer(Account account) {
        this.account = account;
    }


    @Override
    public String toString() {
        return "Photographer{" +
                "id=" + id +
                ", account=" + getAccount().toString() +
                '}';
    }
}
