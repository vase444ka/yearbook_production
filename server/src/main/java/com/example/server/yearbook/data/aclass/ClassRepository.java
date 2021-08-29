package com.example.server.yearbook.data.aclass;

import com.example.server.yearbook.data.aclass.Class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepository extends JpaRepository<Class, Long> {
}
