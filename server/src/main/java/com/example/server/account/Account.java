package com.example.server.account;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "account")
public class Account {
    private Long id;
    private String userName;
    private String passwordHash;
    private Timestamp created;
    private Timestamp updated;
    private Timestamp deleted;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @NaturalId
    @Column(name = "username", unique = true, nullable = false)
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Column(name = "password", nullable = false)
    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    @Column(name = "created", updatable = false, nullable = false)
    public Timestamp getCreated() {
        return created;
    }

    public void setCreated(Timestamp created) {
        this.created = created;
    }

    @Column(name = "updated", nullable = false)
    public Timestamp getUpdated() {
        return updated;
    }

    public void setUpdated(Timestamp updated) {
        this.updated = updated;
    }

    @Column(name = "deleted", updatable = false)
    public Timestamp getDeleted() {
        return deleted;
    }

    public void setDeleted(Timestamp deleted) {
        this.deleted = deleted;
    }

    public Account(String userName,
                   String passwordHash,
                   Timestamp created,
                   Timestamp updated,
                   Timestamp deleted) {
        this.userName = userName;
        this.passwordHash = passwordHash;
        this.created = created;
        this.updated = updated;
        this.deleted = deleted;
    }

    public Account(Long id,
                   String userName,
                   String passwordHash,
                   Timestamp created,
                   Timestamp updated,
                   Timestamp deleted) {
        this.id = id;
        this.userName = userName;
        this.passwordHash = passwordHash;
        this.created = created;
        this.updated = updated;
        this.deleted = deleted;
    }

    public Account() {
        this.created = Timestamp.valueOf(LocalDateTime.now());
        this.updated = Timestamp.valueOf(LocalDateTime.now());
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", passwordHash='" + passwordHash + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                ", deleted=" + deleted +
                '}';
    }
}
