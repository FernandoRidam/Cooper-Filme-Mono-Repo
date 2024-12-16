package com.api.cooperfilme.models;

public class NextStatusModel {
  private ScreenPlayStatus yes;
  private ScreenPlayStatus no;

  public NextStatusModel(ScreenPlayStatus yes, ScreenPlayStatus no) {
    this.yes = yes;
    this.no = no;
  }

  public ScreenPlayStatus getYes() {
    return yes;
  }

  public void setYes(ScreenPlayStatus yes) {
    this.yes = yes;
  }

  public ScreenPlayStatus getNo() {
    return no;
  }

  public void setNo(ScreenPlayStatus no) {
    this.no = no;
  }
}
