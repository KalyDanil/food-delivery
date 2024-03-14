import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import reducers from './reducers';

export const foodsSlice = createSlice({
  name: 'foods',
  initialState: initialState,
  reducers: reducers,
});

export const foodsActions = foodsSlice.actions;

export default foodsSlice.reducer;
