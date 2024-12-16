package com.api.cooperfilme.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.cooperfilme.models.ClientModel;

public interface ClientRepository extends JpaRepository<ClientModel, UUID> {
  Optional<ClientModel> findByEmail(String email);
}
