package com.api.cooperfilme.models;

import java.io.Serializable;
import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Trails")
public class TrailModel implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;

  private Boolean fit;

  @Column(columnDefinition = "TEXT")
  private String justification;

  @Enumerated(EnumType.STRING)
  private ScreenPlayStatus status = ScreenPlayStatus.AWAITING_ANALYSIS;

  private int rating;

  @CreationTimestamp(source = SourceType.DB)
  private Instant createdOn;

  @UpdateTimestamp(source = SourceType.DB)
  private Instant lastUpdatedOn;

  @ManyToOne
  @JoinColumn(name = "screenPlay_id", nullable = false)
  @JsonIgnore
  private ScreenPlayModel screenPlay;

  @ManyToOne
  @JoinColumn(name = "user_id")
  @JsonIgnore
  private UserModel user;

  public static long getSerialversionuid() {
    return serialVersionUID;
  }

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public Boolean getFit() {
    return fit;
  }

  public void setFit(Boolean fit) {
    this.fit = fit;
  }

  public String getJustification() {
    return justification;
  }

  public void setJustification(String justification) {
    this.justification = justification;
  }

  public ScreenPlayStatus getStatus() {
    return status;
  }

  public void setStatus(ScreenPlayStatus status) {
    this.status = status;
  }

  public int getRating() {
    return rating;
  }

  public void setRating(int rating) {
    this.rating = rating;
  }

  public Instant getCreatedOn() {
    return createdOn;
  }

  public void setCreatedOn(Instant createdOn) {
    this.createdOn = createdOn;
  }

  public Instant getLastUpdatedOn() {
    return lastUpdatedOn;
  }

  public void setLastUpdatedOn(Instant lastUpdatedOn) {
    this.lastUpdatedOn = lastUpdatedOn;
  }

  public ScreenPlayModel getScreenPlay() {
    return screenPlay;
  }

  public void setScreenPlay(ScreenPlayModel screenPlay) {
    this.screenPlay = screenPlay;
  }

  public UserModel getUser() {
    return user;
  }

  public void setUser(UserModel user) {
    this.user = user;
  }


}
