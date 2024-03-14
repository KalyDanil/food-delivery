import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  child,
  endAt,
  get,
  getDatabase,
  limitToFirst,
  limitToLast,
  orderByChild,
  orderByKey,
  query,
  ref,
} from 'firebase/database';
import { foodsActions } from '../slicer';

export const getFoods = createAsyncThunk(
  'get-foods',
  async (limit: number, { dispatch }) => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, 'foods');

      const snapshot = await get(query(dbRef, ...[limitToFirst(limit)]));

      if (snapshot.exists()) {
        dispatch(foodsActions.setFoods(snapshot.val()));
      } else {
        dispatch(foodsActions.setFoods([]));
      }
    } catch (error) {
      console.error(error);
    }
  },
);
