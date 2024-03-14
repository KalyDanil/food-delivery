import { signUp, signIn, logOut } from './auth';
import { getUser } from './info';
import { makeOrder } from './order';

export const userReq = {
  signUp,
  signIn,
  logOut,
  getUser,
  makeOrder,
};

export default userReq;
