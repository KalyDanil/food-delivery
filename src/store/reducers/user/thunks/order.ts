import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, push, ref, set } from 'firebase/database';
import { toast } from 'react-toastify';
import { ICurrentOrder } from '../../../../types/user';

export const makeOrder = createAsyncThunk(
  'make-order',
  async (data: ICurrentOrder, { dispatch }) => {
    try {
      const db = getDatabase();

      const ordersListRef = ref(db, 'orders');
      const newOrderRef = push(ordersListRef);

      set(newOrderRef, data);
    } catch (error: any) {
      toast(error.message);
    }
  },
);
