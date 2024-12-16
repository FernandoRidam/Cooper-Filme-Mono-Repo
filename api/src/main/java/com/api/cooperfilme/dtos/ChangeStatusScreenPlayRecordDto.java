package com.api.cooperfilme.dtos;

import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;

public record ChangeStatusScreenPlayRecordDto(
    @NotNull
  Boolean fit,
    @Enumerated
  String justification
) {}
