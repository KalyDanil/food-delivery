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
import { IFood } from '../../../../types/foods';

export const getFoods = createAsyncThunk(
  'get-foods',
  async (limit: number, { dispatch }) => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, 'foods');

      const snapshot = await get(query(dbRef, ...[limitToFirst(limit)]));

      const foods: IFood[] = [];

      snapshot.forEach((childSnapshot) => {
        foods.push(
          Object.assign({ id: childSnapshot.key }, childSnapshot.val()),
        );
      });

      dispatch(foodsActions.setFoods(foods));
    } catch (error) {
      console.error(error);
    }
  },
);
