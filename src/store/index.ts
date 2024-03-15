import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/slicer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export default store;
