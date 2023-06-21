import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, showCounterField: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: ,
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
      counter: state.counter + action.amount,
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
