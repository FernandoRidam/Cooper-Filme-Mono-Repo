package com.api.cooperfilme.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.api.cooperfilme.dtos.AuthRecordDto;
import com.api.cooperfilme.dtos.LoginResponseDto;
import com.api.cooperfilme.models.UserModel;
import com.api.cooperfilme.repositories.UserRepository;
import jakarta.validation.Valid;

@Service
public class AuthService implements UserDetailsService {
  @Autowired
  private ApplicationContext context;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private TokenService tokenService;

  private AuthenticationManager authenticationManager;

  BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    return userRepository.findByEmail(email);
  }

  public UserModel getCurrentUser() {
    final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    final UserDetails userDetails = (UserDetails)authentication.getPrincipal();

    return userRepository.findUserByEmail(userDetails.getUsername()).get();
  }

  public ResponseEntity<Object> login(@RequestBody @Valid AuthRecordDto data) {
    authenticationManager = context.getBean(AuthenticationManager.class);

    var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
    var auth = this.authenticationManager.authenticate(usernamePassword);
    var token = tokenService.generateToken((UserModel) auth.getPrincipal());
    return ResponseEntity.ok(new LoginResponseDto((UserModel) auth.getPrincipal(), token));
  }
}
