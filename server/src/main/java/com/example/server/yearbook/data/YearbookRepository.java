package com.example.server.yearbook.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YearbookRepository extends JpaRepository<Yearbook, Long> {
}
