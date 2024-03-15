import { signUp, signIn, logOut } from './auth';
import { getOrders, makeOrder } from './order';

export const userReq = {
  signUp,
  signIn,
  logOut,
  makeOrder,
  getOrders,
};

export default userReq;
