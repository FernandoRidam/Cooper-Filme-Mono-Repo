package com.api.cooperfilme.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;

public record AuthRecordDto(
    @NotBlank
    @Email
  String email,
    @NotBlank
  String password
) {}
