import { HTMLInputTypeAttribute } from 'react';
import { IOrderFood } from './foods';

export interface IAccount {
  id: string | null;
  email: string | null;
  displayName: string | null;
}

export interface IOrder {
  id?: string;
  foods: IOrderFood[];
  address: {
    street: string;
    home: string;
    entrance: string;
    apartment: string;
  };
  paymentType: string;
  totalPrice: number;
}

export interface IUserSliceState {
  account: IAccount;
  chosenFoods: IOrderFood[];
  orders: IOrder[];
  isLoading: boolean;
}

export interface ISignUpValues {
  email: string;
  password: string;
  passwordRepeat: string;
  displayName: string;
}

export interface ISignInValues {
  email: string;
  password: string;
}

export interface IInputProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  handleChange: (e: React.ChangeEvent<any>) => void;
}
