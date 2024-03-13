import { IFood, IFoodsSliceState } from '../../../types/foods';
import { PayloadAction } from '@reduxjs/toolkit';

const reducers = {
  setFoods: (state: IFoodsSliceState, action: PayloadAction<IFood[]> ) => {
    state.foods = action.payload;
  }
}

export default reducers