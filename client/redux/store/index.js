import { configureStore } from '@reduxjs/toolkit';
import tasks from '../slices/tasksSlice';
import user from '../slices/userSlice'; 

export const store = configureStore({
  reducer: { tasks, user }
});
