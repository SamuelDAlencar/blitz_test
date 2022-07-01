import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../slices/tasksSlice';
// import userReducer from '../slices/userReducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // login: userReducer,
  }
});
