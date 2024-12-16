package com.api.cooperfilme.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.cooperfilme.dtos.AuthRecordDto;
import com.api.cooperfilme.services.AuthService;
import com.api.cooperfilme.services.UserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthController {

  @Autowired
  AuthService authService;

  @Autowired
  UserService userService;

  @PostMapping("/login")
  public ResponseEntity<Object> login(@RequestBody @Valid AuthRecordDto authDto) {
    return authService.login(authDto);
  }
}
