package com.api.cooperfilme.dtos;

import org.hibernate.validator.constraints.Length;

import com.api.cooperfilme.models.UserRole;

import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserRecordDto(
    @NotBlank
  String name,
    @NotBlank
    @Email
  String email,
    @Enumerated
  UserRole role,
    @NotBlank
    @Length(min=8)
  String password
) {}
