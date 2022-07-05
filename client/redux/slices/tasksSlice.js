import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push({
        id: action.payload.id,
        subject: action.payload.subject
      });
    },

    editTaskSubject(state, action) {
      const taskToEdit = state.find(task => task.id === parseInt(action.payload.id));

      taskToEdit.subject = action.payload.subject;
    },

    deleteTask(state, action) {
      return state.filter((task) => task.id !== parseInt(action.payload));
    }
  },
});

export const { addTask, toggleTask, editTaskSubject, editTaskStatus, deleteTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
