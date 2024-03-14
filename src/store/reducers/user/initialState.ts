import { IUserSliceState } from '../../../types/user';

const initialState: IUserSliceState = {
  account: {
    id: null,
    email: null,
    displayName: null,
  },
  currentOrder: {
    userId: null,
    foods: [],
    address: {
      street: '',
      home: '',
      entrance: '',
      apartment: '',
    },
    paymentType: '',
  },
};

export default initialState;
