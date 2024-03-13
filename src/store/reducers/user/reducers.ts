import { IAccount, IUserSliceState } from '../../../types/user';
import { PayloadAction } from '@reduxjs/toolkit';

const reducers = {
  setUserAccount: (state: IUserSliceState, action: PayloadAction<IAccount> ) => {
    state.account = action.payload;
  }
}

export default reducers