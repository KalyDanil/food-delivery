import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { ISignInValues, ISignUpValues } from '../../../../types/user';
import { LS_USER_ID } from '../../../../utils/constants/storage';
import { ROUTES } from '../../../../utils/constants/routes';
import { userActions } from '../slicer';
import initialState from '../initialState';
import i18n from '../../../../i18n';
import { setUserId } from '../../../../utils/functions/user';

export const signUp = createAsyncThunk(
  'sign-up',
  async (values: ISignUpValues, { dispatch }) => {
    try {
      const auth = getAuth();

      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      setUserId(res.user.uid);

      updateProfile(res.user, {
        displayName: values.displayName,
      });

      dispatch(
        userActions.setUserAccount({
          id: res.user.uid,
          email: values.email,
          displayName: values.displayName,
        }),
      );
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast(i18n.t('Email registered'));
        return;
      }

      toast(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'sign-in',
  async (values: ISignInValues, { dispatch }) => {
    try {
      const auth = getAuth();

      const res = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      setUserId(res.user.uid);
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential') {
        toast(i18n.t('Email or password is wrong'));
        return;
      }

      toast(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'log-out',
  async (params, { dispatch }) => {
    try {
      const auth = getAuth();

      signOut(auth);

      dispatch(userActions.setUserAccount(initialState.account));

      localStorage.removeItem(LS_USER_ID);

      window.location.href = ROUTES.MAIN;
    } catch (error: any) {
      toast(error.message);
    }
  },
);
