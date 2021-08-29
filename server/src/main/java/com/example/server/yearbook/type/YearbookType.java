package com.example.server.yearbook.type;


import com.example.server.account.photographer.Photographer;

import javax.persistence.*;

@Entity
@Table(name = "yearbook_type")
public class YearbookType {
    private Long id;
    private String name;
    private Integer portraitMeetingsCount;
    private Integer groupMeetingsCount;
    private Integer price;

    private Long photographerId;

    public YearbookType(Long id,
                        String name,
                        Integer portraitMeetingsCount,
                        Integer groupMeetingsCount,
                        Long photographerId,
                        Integer price) {
        this.id = id;
        this.name = name;
        this.portraitMeetingsCount = portraitMeetingsCount;
        this.groupMeetingsCount = groupMeetingsCount;
        this.photographerId = photographerId;
        this.price = price;
    }

    public YearbookType(String name,
                        Integer portraitMeetingsCount,
                        Integer groupMeetingsCount,
                        Long photographerId,
                        Integer price) {
        this.name = name;
        this.portraitMeetingsCount = portraitMeetingsCount;
        this.groupMeetingsCount = groupMeetingsCount;
        this.photographerId = photographerId;
        this.price = price;
    }

    public YearbookType() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "photographer_id", nullable = false)
    public Long getPhotographerId() {
        return photographerId;
    }

    public void setPhotographerId(Long photographerId) {
        this.photographerId = photographerId;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "portrait_meetings_count", nullable = false)
    public Integer getPortraitMeetingsCount() {
        return portraitMeetingsCount;
    }

    public void setPortraitMeetingsCount(Integer portraitMeetingsCount) {
        this.portraitMeetingsCount = portraitMeetingsCount;
    }

    @Column(name = "group_meetings_count", nullable = false)
    public Integer getGroupMeetingsCount() {
        return groupMeetingsCount;
    }

    public void setGroupMeetingsCount(Integer groupMeetingsCount) {
        this.groupMeetingsCount = groupMeetingsCount;
    }

    @Column(name = "price", nullable = false)
    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "YearbookType{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", portraitMeetingsCount=" + portraitMeetingsCount +
                ", groupMeetingsCount=" + groupMeetingsCount +
                ", price=" + price +
                ", photographer=" + photographerId +
                '}';
    }
}
