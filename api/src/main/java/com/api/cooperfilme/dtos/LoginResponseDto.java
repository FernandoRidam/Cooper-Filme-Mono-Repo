package com.api.cooperfilme.dtos;

import com.api.cooperfilme.models.UserModel;

public record LoginResponseDto(
  UserModel user,
  String token
) {}
