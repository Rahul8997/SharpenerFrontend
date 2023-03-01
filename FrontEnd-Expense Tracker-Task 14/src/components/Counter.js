import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increase());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrease());
  };
  const IncrementBy5Handler = () => {
    dispatch(counterActions.incrementBy5(5));
  };

  const DecrementBy5Handler = () => {
    dispatch(counterActions.decrementBy5(5));
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={IncrementBy5Handler}>IncrementBy5</button>
        <button onClick={DecrementBy5Handler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;