import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authenticationSlice.actions;

export default authenticationSlice.reducer;
