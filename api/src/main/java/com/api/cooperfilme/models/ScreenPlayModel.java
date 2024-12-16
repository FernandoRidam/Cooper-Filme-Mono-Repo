package com.api.cooperfilme.models;

import java.io.Serializable;
import java.time.Instant;
import java.util.Set;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import jakarta.persistence.Table;

@Entity
@Table(name = "ScreenPlays")
public class ScreenPlayModel implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;

  private String title;

  @Column(columnDefinition = "TEXT")
  private String content;

  @ManyToOne
  @JoinColumn(name = "client_id", nullable = false)
  private ClientModel client;

  @OneToMany(mappedBy="screenPlay")
  @OrderBy("createdOn DESC")
  private Set<TrailModel> trail;

  @CreationTimestamp(source = SourceType.DB)
  private Instant createdOn;

  @UpdateTimestamp(source = SourceType.DB)
  private Instant lastUpdatedOn;

  public static long getSerialversionuid() {
    return serialVersionUID;
  }

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public ClientModel getClient() {
    return client;
  }

  public void setClient(ClientModel client) {
    this.client = client;
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

  public Set<TrailModel> getTrail() {
    return trail;
  }

  public void setTrail(Set<TrailModel> trail) {
    this.trail = trail;
  }
}
