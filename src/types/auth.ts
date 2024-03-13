import { HTMLInputTypeAttribute } from "react";

export interface RegistrationError {
  domain: string;
  message: string;
  reason: string;
}

export interface AuthInputProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  handleChange: (e: React.ChangeEvent<any>) => void;
}
