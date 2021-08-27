package com.example.server.yearbook.data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "yearbook")
public class Yearbook {

    private Long id;//TODO figure one to one out
    private Long  yearbookTypeId;//TODO fk
    private Integer version;
    private Timestamp prepayed;//TODO data type
    private Timestamp payed;
    private Timestamp nextMeeting;
    private Timestamp deadline;
    private Timestamp created;
    private Timestamp updated;
    private Timestamp deleted;

    private Class aClass;

    public Yearbook() {
    }

    public Yearbook(Long yearbookTypeId,
                    Integer version,
                    Timestamp prepayed,
                    Timestamp payed,
                    Timestamp nextMeeting,
                    Timestamp deadline,
                    Timestamp created,
                    Timestamp updated,
                    Timestamp deleted,
                    Class aClass) {
        this.yearbookTypeId = yearbookTypeId;
        this.version = version;
        this.prepayed = prepayed;
        this.payed = payed;
        this.nextMeeting = nextMeeting;
        this.deadline = deadline;
        this.created = created;
        this.updated = updated;
        this.deleted = deleted;
        this.aClass = aClass;
    }

    public Yearbook(Long id,
                    Long yearbookTypeId,
                    Integer version,
                    Timestamp prepayed,
                    Timestamp payed,
                    Timestamp nextMeeting,
                    Timestamp deadline,
                    Timestamp created,
                    Timestamp updated,
                    Timestamp deleted, Class aClass) {
        this.id = id;
        this.yearbookTypeId = yearbookTypeId;
        this.version = version;
        this.prepayed = prepayed;
        this.payed = payed;
        this.nextMeeting = nextMeeting;
        this.deadline = deadline;
        this.created = created;
        this.updated = updated;
        this.deleted = deleted;
        this.aClass = aClass;
    }

    @Id
    @Column(name = "id", nullable = false, unique = true)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToOne(optional = false)
    @JoinColumn(name = "id", referencedColumnName = "id")
    public Class getaClass() {
        return aClass;
    }

    /**
     * Bidirectional setter
     * @param aClass
     **/
    public void setaClass(Class aClass) {
        this.aClass = aClass;
        if(aClass!=null) {
            aClass.setYearbook(this);
        }
    }

    //TODO foreign key
    @Column(name = "yearbook_type_id", nullable = false)
    public Long getYearbookTypeId() {
        return yearbookTypeId;
    }

    public void setYearbookTypeId(Long yearbookTypeId) {
        this.yearbookTypeId = yearbookTypeId;
    }

    @Column(name = "version", nullable = false)
    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    @Column(name = "prepayed", nullable = true)
    public Timestamp getPrepayed() {
        return prepayed;
    }

    public void setPrepayed(Timestamp prepayed) {
        this.prepayed = prepayed;
    }

    @Column(name = "payed", nullable = true)
    public Timestamp getPayed() {
        return payed;
    }

    public void setPayed(Timestamp payed) {
        this.payed = payed;
    }

    @Column(name = "next_meeting", nullable = true)
    public Timestamp getNextMeeting() {
        return nextMeeting;
    }

    public void setNextMeeting(Timestamp nextMeeting) {
        this.nextMeeting = nextMeeting;
    }

    @Column(name = "deadline", nullable = false)
    public Timestamp getDeadline() {
        return deadline;
    }

    public void setDeadline(Timestamp deadline) {
        this.deadline = deadline;
    }

    @Column(name = "created", nullable = false, updatable = false)
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

    @Column(name = "deleted", nullable = false, updatable = false)
    public Timestamp getDeleted() {
        return deleted;
    }

    public void setDeleted(Timestamp deleted) {
        this.deleted = deleted;
    }

    @Override
    public String toString() {
        return "Yearbook{" +
                "id=" + id +
                ", yearbookTypeId=" + yearbookTypeId +
                ", version=" + version +
                ", prepayed=" + prepayed +
                ", payed=" + payed +
                ", nextMeeting=" + nextMeeting +
                ", deadline=" + deadline +
                ", created=" + created +
                ", updated=" + updated +
                ", deleted=" + deleted +
                '}';
    }
}
