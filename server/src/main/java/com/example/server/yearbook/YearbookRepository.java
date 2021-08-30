package com.example.server.yearbook;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface YearbookRepository extends JpaRepository<Yearbook, Long> {
    @Query(
            value = "SELECT * FROM yearbook JOIN yearbook_type yt on yt.id = yearbook.yearbook_type_id" +
                    " yt WHERE yt.photographer_id = ",
            nativeQuery = true)
    List<Yearbook> findYearbooksByPhotographerId();//TODO custom SQL
}
