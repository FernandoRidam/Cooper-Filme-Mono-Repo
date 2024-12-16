package com.api.cooperfilme.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.cooperfilme.dtos.ChangeStatusScreenPlayRecordDto;
import com.api.cooperfilme.dtos.ScreenPlayRecordDto;
import com.api.cooperfilme.models.ScreenPlayModel;
import com.api.cooperfilme.models.TrailModel;
import com.api.cooperfilme.services.ScreenPlayService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("screenplays")
public class ScreenPlayController {
  @Autowired
  ScreenPlayService screenPlayService;

  @PostMapping
  public ResponseEntity<ScreenPlayModel> saveScreenPlay(@RequestBody @Valid ScreenPlayRecordDto screenPlayRecordDto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(screenPlayService.saveScreenPlay(screenPlayRecordDto));
  }

  @GetMapping
  public ResponseEntity<List<ScreenPlayModel>> getAllScreenPlays() {
    return ResponseEntity.status(HttpStatus.OK).body(screenPlayService.getAllScreenPlays());
  }

  @GetMapping("/{id}")
  public ResponseEntity<ScreenPlayModel> getScreenPlay(@PathVariable(value="id") UUID id) {
    return ResponseEntity.status(HttpStatus.OK).body(screenPlayService.getScreenPlay(id));
  }

  @PatchMapping("/{id}/trail")
  public ResponseEntity<TrailModel> changeStatusScreenPlay(@PathVariable(value="id") UUID id, @RequestBody @Valid ChangeStatusScreenPlayRecordDto changeStatusScreenPlayRecordDto) {
    return ResponseEntity.status(HttpStatus.OK).body(screenPlayService.changeStatusScreenPlay(id, changeStatusScreenPlayRecordDto));
  }
}
