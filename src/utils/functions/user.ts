import { LS_USER_ID } from '../constants/storage';

export const getUserId = () => {
  return localStorage.getItem(LS_USER_ID);
};

export const setUserId = (userId: string) => {
  localStorage.setItem(LS_USER_ID, userId);
};
