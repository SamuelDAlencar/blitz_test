import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    password: ''
  },
  reducers: {
    signUp(state, action) {
      const { username, email, password } = action.payload;

      state = {
        username: username,
        email: email,
        password: password,
      };
    }
  }
});

export const { signUp } = userSlice.actions;
export default userSlice.reducer;
