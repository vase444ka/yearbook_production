package com.example.server.account.photographer;

import javax.persistence.*;

@Entity
@Table(name = "photographer")
public class Photographer {
    private Long id;//TODO weird fk

    @Id
    @GeneratedValue
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Photographer() {
    }

    public Photographer(Long id) {
        this.id = id;
    }
}
