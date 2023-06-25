import { legacy_createStore as createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounterField: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy(state, action) {
      state.counter = state.counter + action.value;
    },
    toggleCounter(state) {
      state.showCounterField = !state.showCounterField;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounterField: state.showCounterField,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounterField: state.showCounterField,
    };
  }
  if (action.type === "increaseBy") {
    return {
      counter: state.counter + action.value,
      showCounterField: state.showCounterField,
    };
  }
  if (action.type === "toggleCounter") {
    return {
      showCounterField: !state.showCounterField,
      counter: state.counter,
    };
  }

  return state;
};

// const defaultReducer = {
//   counter: 0,
// };

const store = createStore(counterReducer);

export default store;
