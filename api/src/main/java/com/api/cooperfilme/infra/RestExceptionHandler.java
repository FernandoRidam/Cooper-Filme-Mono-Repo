package com.api.cooperfilme.infra;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.api.cooperfilme.exceptions.ExceptionConflict;
import com.api.cooperfilme.exceptions.ExceptionNotFound;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
  @ExceptionHandler(ExceptionNotFound.class)
  private ResponseEntity<String> notFoundHandler(ExceptionNotFound exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
  }

  @ExceptionHandler(ExceptionConflict.class)
  private ResponseEntity<String> conflictHandler(ExceptionConflict exception) {
    return ResponseEntity.status(HttpStatus.CONFLICT).body(exception.getMessage());
  }
}
