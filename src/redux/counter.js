import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
