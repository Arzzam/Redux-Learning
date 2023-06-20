import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [toggleCounter, setToggleCounter] = useState(true);

  const toggleCounterHandler = () => {
    setToggleCounter((prevState) => !prevState);
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
