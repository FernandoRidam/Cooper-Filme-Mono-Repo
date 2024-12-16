package com.api.cooperfilme.dtos;

import java.util.UUID;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ScreenPlayRecordDto(
  UUID client_id,
    @NotBlank
  String name,
    @NotBlank
    @Email
  String email,
    @NotBlank
  String phone,
    @NotBlank
  String title,
    @NotBlank
  String content
) {}
