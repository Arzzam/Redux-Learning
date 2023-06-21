import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showToggleCounter = useSelector((state) => state.showCounterField);

  const toggleCounterHandler = () => {
    dispatch({ type: "toggleCounter" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseBy = (value) => {
    dispatch({ type: "increaseBy", amount: value });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseBy(5)}>Increase by 5</button>
        <button onClick={() => increaseBy(10)}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
