import { IOrderFood } from '../../../types/foods';
import { IAccount, IOrder, IUserSliceState } from '../../../types/user';
import { PayloadAction } from '@reduxjs/toolkit';

const reducers = {
  setUserAccount: (state: IUserSliceState, action: PayloadAction<IAccount>) => {
    state.account = action.payload;
  },
  changeCurrentOrderFoods: (
    state: IUserSliceState,
    action: PayloadAction<IOrderFood>,
  ) => {
    const orderFood = action.payload;
    const index = state.chosenFoods.findIndex(
      (item) => item.id === orderFood.id,
    );
    const foods = [...state.chosenFoods];

    if (index > -1) {
      if (orderFood.amount === 0) {
        foods.splice(index, 1);
      } else {
        foods.splice(index, 1, orderFood);
      }

      state.chosenFoods = foods;
      return;
    }

    foods.push(orderFood);

    state.chosenFoods = foods;
  },
  setOrders: (state: IUserSliceState, action: PayloadAction<IOrder[]>) => {
    state.orders = action.payload;
  },
};

export default reducers;
