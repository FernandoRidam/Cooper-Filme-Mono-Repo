package com.api.cooperfilme.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.api.cooperfilme.models.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, UUID>{
  UserDetails findByEmail(String email);
  Optional<UserModel> findUserByEmail(String email);
}
