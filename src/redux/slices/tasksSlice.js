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
    editTask(state, action) {
      const taskToEdit = state.find((task) => task.id === action.payload.id);
      taskToEdit.subject = action.payload.subject;
    },
    toggleTask(state, action) {
      const task = state.find(task => task.id === action.payload);
      task.done = !task.done;
    }
    
  },
});

export const { addTask, toggleTask, editTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
