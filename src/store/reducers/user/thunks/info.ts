import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userActions } from '../slicer';

export const getUser = createAsyncThunk(
  'get-user',
  async (params, { dispatch }) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>
      dispatch(
        userActions.setUserAccount({
          id: user ? user.uid : null,
          email: user ? user.email : null,
          displayName: user ? user.displayName : null,
        }),
      ),
    );
  },
);
