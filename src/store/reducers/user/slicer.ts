import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import initialState from './initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: reducers,
});

export const userActions = userSlice.actions;

export default userSlice.reducer;