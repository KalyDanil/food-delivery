import { User } from 'firebase/auth'

export interface IAccount {
  uid: string | null,
  email: string | null,
  displayName: string | null
}

export interface IUserSliceState {
  account: IAccount
}