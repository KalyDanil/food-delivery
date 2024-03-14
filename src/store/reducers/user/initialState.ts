import { IUserSliceState } from '../../../types/user';

const initialState: IUserSliceState = {
  account: {
    id: null,
    email: null,
    displayName: null,
  },
  chosenFoods: [],
  orders: [],
};

export default initialState;
