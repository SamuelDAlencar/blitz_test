import { createSlice } from '@reduxjs/toolkit';

const initialState = { token: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    token(state, action) {
      state.token = action.payload;
    }
  }
});

export const { token } = userSlice.actions;
export const selectToken = state => state.user;
export default userSlice.reducer;
