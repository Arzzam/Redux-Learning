import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "increaseBy") {
    return {
      counter: state.counter + action.amount,
    };
  }

  return state;
};

// const defaultReducer = {
//   counter: 0,
// };

const store = createStore(counterReducer);

export default store;
