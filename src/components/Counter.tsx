import { useState } from "react";
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button className={classes.red} onClick={() => setCount(prev => prev + 1)}>
      {count}
    </button>
  )
};

export default Counter;
