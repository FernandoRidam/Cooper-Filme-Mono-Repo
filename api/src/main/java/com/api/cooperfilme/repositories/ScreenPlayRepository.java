package com.api.cooperfilme.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.cooperfilme.models.ScreenPlayModel;

public interface ScreenPlayRepository extends JpaRepository<ScreenPlayModel, UUID> {
  List<ScreenPlayModel> findByClientIdOrderByLastUpdatedOn(UUID id);
  List<ScreenPlayModel> findAllByOrderByLastUpdatedOn();
}
