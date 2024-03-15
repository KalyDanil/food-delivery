import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserSliceState } from '../../../types/user';
import userReq from './thunks';

const extraReducers = (builder: ActionReducerMapBuilder<IUserSliceState>) => {
  builder.addCase(userReq.makeOrder.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(userReq.makeOrder.fulfilled, (state) => {
    state.isLoading = false;
  });
  builder.addCase(userReq.makeOrder.rejected, (state) => {
    state.isLoading = false;
  });

  builder.addCase(userReq.signUp.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(userReq.signUp.fulfilled, (state) => {
    state.isLoading = false;
  });
  builder.addCase(userReq.signUp.rejected, (state) => {
    state.isLoading = false;
  });

  builder.addCase(userReq.signIn.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(userReq.signIn.fulfilled, (state) => {
    state.isLoading = false;
  });
  builder.addCase(userReq.signIn.rejected, (state) => {
    state.isLoading = false;
  });
};

export default extraReducers;
