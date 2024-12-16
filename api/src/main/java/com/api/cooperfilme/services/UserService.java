package com.api.cooperfilme.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.api.cooperfilme.dtos.UserRecordDto;
import com.api.cooperfilme.exceptions.ExceptionConflict;
import com.api.cooperfilme.exceptions.ExceptionNotFound;
import com.api.cooperfilme.models.UserModel;
import com.api.cooperfilme.repositories.UserRepository;

@Service
public class UserService {
  @Autowired
  UserRepository userRepository;

  BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

  public UserModel saveUser(UserRecordDto userRecordDto) {
    var user = new UserModel();

    BeanUtils.copyProperties(userRecordDto, user);

    Optional<UserModel> _user = userRepository.findUserByEmail(user.getEmail());

    if(_user.isPresent()) {
      throw new ExceptionConflict("Email indisponível");
    }

    String pass = bcrypt.encode(user.getPassword());

    user.setPassword(pass);

    return userRepository.save(user);
  }

  public List<UserModel> getAllUsers() {
    return userRepository.findAll();
  }

  public Optional<UserModel> getUser(UUID id) {
    Optional<UserModel> user = userRepository.findById(id);

    if(user.isEmpty()) {
      throw new ExceptionNotFound("Usuário não encontrado");
    }

    return user;
  }

  public UserModel updateUser(UUID id, UserRecordDto userRecordDto) {
    Optional<UserModel> user = userRepository.findById(id);

    if(user.isEmpty()) {
      throw new ExceptionNotFound("Usuário não encontrado");
    }

    var userData = user.get();

    BeanUtils.copyProperties(userRecordDto, userData);

    return userRepository.save(userData);
  }

  public String deleteUser(UUID id) {
    Optional<UserModel> user = userRepository.findById(id);

    if(user.isEmpty()) {
      throw new ExceptionNotFound("Usuário não encontrado");
    }

    userRepository.delete(user.get());

    return "User deleted successfully";
  }
}
