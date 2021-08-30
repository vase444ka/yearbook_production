package com.example.server.yearbook;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface YearbookRepository extends JpaRepository<Yearbook, Long> {

    @Query("FROM Yearbook AS yb LEFT JOIN yb.yearbookType AS yt WHERE yt.photographerId = ?1")
    public List<Yearbook> FindAllWithDescriptionQuery(Long id);
}
