package com.api.cooperfilme.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ClientByEmailRecordDto(
    @NotBlank
    @Email
  String email
) {}
