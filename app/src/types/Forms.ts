export interface LoginForm {
  email: string;
  password: string;
};

export interface ClientEmailForm {
  email: string;
};

export interface SendChangeStatus {
  fit: boolean;
  justification?: string | null;
};

export interface ScreenPlayForm {
  client_id?: string | null;
  name: string;
  email: string;
  phone: string;
  title: string;
  content: string;
};
