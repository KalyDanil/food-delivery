import { signUp, signIn, logOut } from './auth';
import { getUser } from './info';
import { getOrders, makeOrder } from './order';

export const userReq = {
  signUp,
  signIn,
  logOut,
  getUser,
  makeOrder,
  getOrders,
};

export default userReq;
