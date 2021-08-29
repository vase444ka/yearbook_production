package com.example.server.yearbook.type;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface YearbookTypeRepository extends JpaRepository<YearbookType, Long> {
    List<YearbookType> findYearbookTypeByPhotographerId(Long photographerId);
}
