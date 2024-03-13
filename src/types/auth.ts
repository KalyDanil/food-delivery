import { HTMLInputTypeAttribute } from "react";

export interface IAuthInputProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  handleChange: (e: React.ChangeEvent<any>) => void;
}
