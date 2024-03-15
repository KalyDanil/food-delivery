import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import initialState from './initialState';
import userReq from './thunks';
import extraReducers from './extraReducers';

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: reducers,
  extraReducers: extraReducers,
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
