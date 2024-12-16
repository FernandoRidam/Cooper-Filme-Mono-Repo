package com.api.cooperfilme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.cooperfilme.models.ClientModel;
import com.api.cooperfilme.models.ScreenPlayModel;
import com.api.cooperfilme.services.ClientService;

@RestController
@RequestMapping("clients")
public class ClientController {
  @Autowired
  ClientService clientService;

  @GetMapping("/{email}")
  public ResponseEntity<ClientModel> getClientByEmail(@PathVariable(value="email") String email) {
    return ResponseEntity.status(HttpStatus.OK).body(clientService.getClientByEmail(email));
  }

  @GetMapping("/{email}/screenplays")
  public ResponseEntity<List<ScreenPlayModel>> getAllScreenPlaysByEmail(@PathVariable(value="email") String email) {
    return ResponseEntity.status(HttpStatus.OK).body(clientService.getAllScreenPlaysByEmail(email));
  }
}
