import { IFood, IOrderFood } from '../../../types/foods';
import { IAccount, ICurrentOrder, IUserSliceState } from '../../../types/user';
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
    const index = state.currentOrder.foods.findIndex(
      (item) => item.id === orderFood.id,
    );
    const foods = [...state.currentOrder.foods];

    if (index > -1) {
      if (orderFood.amount === 0) {
        foods.splice(index, 1);
      } else {
        foods.splice(index, 1, orderFood);
      }

      state.currentOrder.foods = foods;
      return;
    }

    foods.push(orderFood);

    state.currentOrder.foods = foods;
  },
};

export default reducers;
