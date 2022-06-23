import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push({
        id: action.payload.id,
        subject: action.payload.subject,
        done: false
      });
    },
    toggleTask(state, action) {
      const task = state.find(task => task.id === action.payload);
      task.done = !task.done;
    }
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
