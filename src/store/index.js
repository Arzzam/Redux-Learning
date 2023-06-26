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

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter";
import authenticationReducer from "../redux/auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authenticationReducer,
  },
});

export default store;
