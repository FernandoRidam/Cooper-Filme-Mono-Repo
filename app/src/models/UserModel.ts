export enum UserRole {
  ANALYST = "ANALYST",
  REVIEWER = "REVIEWER",
  APPROVER = "APPROVER",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  token: string;
};
