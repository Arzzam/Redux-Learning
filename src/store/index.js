// import { legacy_createStore as createStore } from "redux";

// Reducer Method

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounterField: state.showCounterField,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounterField: state.showCounterField,
//     };
//   }
//   if (action.type === "increaseBy") {
//     return {
//       counter: state.counter + action.value,
//       showCounterField: state.showCounterField,
//     };
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       showCounterField: !state.showCounterField,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const defaultReducer = {
//   counter: 0,
// };

import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounterField: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounterField = !state.showCounterField;
    },
  },
});

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

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authenticationSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;

export default store;
