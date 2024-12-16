package com.api.cooperfilme.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.cooperfilme.dtos.ScreenPlayRecordDto;
import com.api.cooperfilme.exceptions.ExceptionConflict;
import com.api.cooperfilme.exceptions.ExceptionNotFound;
import com.api.cooperfilme.models.ClientModel;
import com.api.cooperfilme.models.ScreenPlayModel;
import com.api.cooperfilme.repositories.ClientRepository;
import com.api.cooperfilme.repositories.ScreenPlayRepository;

@Service
public class ClientService {
  @Autowired
  ClientRepository clientRepository;

  @Autowired
  ScreenPlayRepository screenPlayRepository;

  public ClientModel saveClient(ScreenPlayRecordDto clientRecordDto) {
    if(clientRecordDto.client_id().equals(null)) {
      Optional<ClientModel> _client = clientRepository.findByEmail(clientRecordDto.email());

      if(_client.isPresent()) {
        throw new ExceptionConflict("Email já cadastrado");
      }

      ClientModel client = new ClientModel();

      BeanUtils.copyProperties(clientRecordDto, client);

      return clientRepository.save(client);
    } else {
      Optional<ClientModel> client = clientRepository.findById(clientRecordDto.client_id());

      if(client.isEmpty()) {
        throw new ExceptionNotFound("Cliente não encontrado");
      }

      ClientModel clientData = client.get();

      BeanUtils.copyProperties(clientRecordDto, clientData);

      clientData.setEmail(clientData.getEmail());

      if(client.get().equals(clientData)) return clientData;

      return clientRepository.save(clientData);
    }
  }

  public ClientModel getClientByEmail(String email) {
    Optional<ClientModel> client = clientRepository.findByEmail(email);

    if(client.isEmpty()) {
      throw new ExceptionNotFound("Cliente não encontrado");
    }

    return client.get();
  }

  public ClientModel getClient(UUID id) {
    Optional<ClientModel> client = clientRepository.findById(id);

    if(client.isEmpty()) {
      throw new ExceptionNotFound("Cliente não encontrado");
    }

    return client.get();
  }

  public List<ScreenPlayModel> getAllScreenPlaysByEmail(String email) {
    Optional<ClientModel> client = clientRepository.findByEmail(email);

    if(client.isEmpty()) {
      throw new ExceptionNotFound("Cliente não encontrado");
    }

    ClientModel _client = client.get();

    return screenPlayRepository.findByClientIdOrderByLastUpdatedOn(_client.getId());
  }
}
