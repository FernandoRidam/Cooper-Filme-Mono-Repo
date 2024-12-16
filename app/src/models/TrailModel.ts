import { User } from "./UserModel";

export enum ScreenPlayStatus {
  AWAITING_ANALYSIS = "AWAITING_ANALYSIS",
  UNDER_ANALYSIS = "UNDER_ANALYSIS",
  AWAITING_REVIEW = "AWAITING_REVIEW",
  UNDER_REVIEW = "UNDER_REVIEW",
  AWAITING_APPROVAL = "AWAITING_APPROVAL",
  UNDER_APPROVAL = "UNDER_APPROVAL",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
};

export interface Trail {
  id: string;
  fit: boolean | null;
  status: ScreenPlayStatus;
  justification: string | null;
  user: User;
  rating: number;
  createdOn: Date;
  lastUpdatedOn: Date;
};
