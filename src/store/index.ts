import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/slicer';
import foodsReducer from './reducers/foods/slicer';

const store = configureStore({
  reducer: {
    user: userReducer,
    foods: foodsReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export default store;
