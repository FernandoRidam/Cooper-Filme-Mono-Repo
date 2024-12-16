package com.api.cooperfilme.services;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.cooperfilme.dtos.ChangeStatusScreenPlayRecordDto;
import com.api.cooperfilme.dtos.ScreenPlayRecordDto;
import com.api.cooperfilme.exceptions.ExceptionConflict;
import com.api.cooperfilme.exceptions.ExceptionNotFound;
import com.api.cooperfilme.models.NextStatusModel;
import com.api.cooperfilme.models.ScreenPlayModel;
import com.api.cooperfilme.models.ScreenPlayStatus;
import com.api.cooperfilme.models.TrailModel;
import com.api.cooperfilme.repositories.ScreenPlayRepository;
import com.api.cooperfilme.repositories.TrailRepository;

@Service
public class ScreenPlayService {
  @Autowired
  ScreenPlayRepository screenPlayRepository;

  @Autowired
  TrailRepository trailRepository;

  @Autowired
  ClientService clientService;

  @Autowired
  AuthService authService;

  public ScreenPlayModel saveScreenPlay(ScreenPlayRecordDto screenPlayRecordDto) {
    var screenPlay = new ScreenPlayModel();

    var client = clientService.saveClient(screenPlayRecordDto);

    screenPlay.setClient(client);

    BeanUtils.copyProperties(screenPlayRecordDto, screenPlay);

    ScreenPlayModel savedScreenPlay = screenPlayRepository.save(screenPlay);

    TrailModel trailModel = new TrailModel();

    trailModel.setScreenPlay(savedScreenPlay);
    trailModel.setFit(true);

    trailRepository.save(trailModel);

    return savedScreenPlay;
  }

  public List<ScreenPlayModel> getAllScreenPlays() {
    return screenPlayRepository.findAllByOrderByLastUpdatedOn();
  }

  public ScreenPlayModel getScreenPlay(UUID id) {
    Optional<ScreenPlayModel> screenPlay = screenPlayRepository.findById(id);

    if(screenPlay.isEmpty()) {
      throw new ExceptionNotFound("Roteiro não encontrado");
    }

    return screenPlay.get();
  }

  public TrailModel changeStatusScreenPlay(UUID id, ChangeStatusScreenPlayRecordDto changeStatusScreenPlayRecordDto) {
    Optional<ScreenPlayModel> screenPlay = screenPlayRepository.findById(id);

    boolean fit = changeStatusScreenPlayRecordDto.fit();

    if(screenPlay.isEmpty()) {
      throw new ExceptionNotFound("Roteiro não encontrado");
    }

    ScreenPlayModel _screenPlay = screenPlay.get();

    TrailModel trail = trailRepository.findFirstByScreenPlayIdOrderByLastUpdatedOnDesc(_screenPlay.getId());

    ScreenPlayStatus status = trail.getStatus();

    if (status.equals(ScreenPlayStatus.APPROVED) ||
        status.equals(ScreenPlayStatus.REJECTED) ||
        (!fit &&
            (status.equals(ScreenPlayStatus.AWAITING_ANALYSIS) ||
                status.equals(ScreenPlayStatus.AWAITING_REVIEW) ||
                status.equals(ScreenPlayStatus.UNDER_REVIEW)))) {
      throw new ExceptionConflict("Fluxo indevido");
    }

    Map<ScreenPlayStatus, NextStatusModel> nextStatusMap = new EnumMap<>(ScreenPlayStatus.class);

    nextStatusMap.put(ScreenPlayStatus.AWAITING_ANALYSIS, new NextStatusModel(ScreenPlayStatus.UNDER_ANALYSIS, null));
    nextStatusMap.put(ScreenPlayStatus.UNDER_ANALYSIS, new NextStatusModel(ScreenPlayStatus.AWAITING_REVIEW, ScreenPlayStatus.REJECTED));
    nextStatusMap.put(ScreenPlayStatus.AWAITING_REVIEW, new NextStatusModel(ScreenPlayStatus.UNDER_REVIEW, null));
    nextStatusMap.put(ScreenPlayStatus.UNDER_REVIEW, new NextStatusModel(ScreenPlayStatus.AWAITING_APPROVAL, null));
    nextStatusMap.put(ScreenPlayStatus.AWAITING_APPROVAL, new NextStatusModel(ScreenPlayStatus.UNDER_APPROVAL, ScreenPlayStatus.REJECTED));
    nextStatusMap.put(ScreenPlayStatus.UNDER_APPROVAL, new NextStatusModel(ScreenPlayStatus.APPROVED, ScreenPlayStatus.REJECTED));

    NextStatusModel nextStatus = nextStatusMap.get(status);

    trail.setFit(fit);

    trail.setUser(authService.getCurrentUser());

    if(status.equals(ScreenPlayStatus.UNDER_APPROVAL) && fit) {
      trail.setRating(trail.getRating() + 1);

      if(trail.getRating() < 3) {
        trailRepository.save(trail);

        return trail;
      }
    }

    trailRepository.save(trail);

    TrailModel _trailModel = new TrailModel();

    BeanUtils.copyProperties(changeStatusScreenPlayRecordDto, _trailModel);

    _trailModel.setStatus(fit ? nextStatus.getYes() : nextStatus.getNo());
    _trailModel.setScreenPlay(_screenPlay);
    _trailModel.setRating(1);

    trailRepository.save(_trailModel);

    return _trailModel;
  }
}
