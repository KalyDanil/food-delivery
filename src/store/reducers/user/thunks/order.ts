import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, getDatabase, push, query, ref, set } from 'firebase/database';
import { toast } from 'react-toastify';
import { IOrder } from '../../../../types/user';
import { RootStateType } from '../../..';
import { userActions } from '../slicer';
import { getUserId } from '../../../../utils/functions/user';

export const makeOrder = createAsyncThunk(
  'make-order',
  async (
    params: {
      data: IOrder;
      setConfirmedOrder: React.Dispatch<React.SetStateAction<IOrder | null>>;
    },
    { dispatch, getState },
  ) => {
    try {
      const { data, setConfirmedOrder } = params;
      const state = getState() as RootStateType;
      const { account } = state.user;

      const db = getDatabase();

      const ordersListRef = ref(db, `user/${account.id}/orders`);
      const newOrderRef = push(ordersListRef);
      const newOrderData = Object.assign({ id: newOrderRef.key }, data);

      await set(newOrderRef, data);

      dispatch(userActions.pushOrder(newOrderData));

      setConfirmedOrder(newOrderData);
    } catch (error: any) {
      toast(error.message);
    }
  },
);

export const getOrders = createAsyncThunk(
  'get-orders',
  async (params, { dispatch }) => {
    try {
      const db = getDatabase();
      const userId = getUserId();
      const dbRef = ref(db, `user/${userId}/orders`);

      const snapshot = await get(query(dbRef));

      const orders: IOrder[] = [];

      snapshot.forEach((childSnapshot) => {
        orders.push(
          Object.assign({ id: childSnapshot.key }, childSnapshot.val()),
        );
      });

      dispatch(userActions.setOrders(orders));
    } catch (error: any) {
      toast(error.message);
    }
  },
);
