package com.api.cooperfilme.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.cooperfilme.models.TrailModel;

public interface TrailRepository extends JpaRepository<TrailModel, UUID> {
  TrailModel findFirstByScreenPlayIdOrderByLastUpdatedOnDesc(UUID id);
}
