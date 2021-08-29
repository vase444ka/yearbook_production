package com.example.server.account.supervisor;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupervisorRepository extends JpaRepository<Supervisor, Long> {
    List<Supervisor> findSupervisorsByYearbookId(Long id);
}
