package com.api.cooperfilme.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.cooperfilme.dtos.UserRecordDto;
import com.api.cooperfilme.models.UserModel;
import com.api.cooperfilme.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("users")
public class UserController {
  @Autowired
  UserService userService;

  @PostMapping
  public ResponseEntity<UserModel> saveUser(@RequestBody @Valid UserRecordDto userRecordDto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveUser(userRecordDto));
  }

  @GetMapping
  public ResponseEntity<List<UserModel>> getAllUsers() {
    return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<UserModel>> getUser(@PathVariable(value="id") UUID id) {
    return ResponseEntity.status(HttpStatus.OK).body(userService.getUser(id));
  }

  @PutMapping("/{id}")
  public ResponseEntity<UserModel> updateUser(@PathVariable(value="id") UUID id, @RequestBody @Valid UserRecordDto userRecordDto) {
    return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(id, userRecordDto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteUser(@PathVariable(value="id") UUID id) {
    return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUser(id));
  }
}
