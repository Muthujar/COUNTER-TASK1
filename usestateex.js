import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const Numbers = (x) => {
    let val = x ? count + 1 : count - 1;

    setCount(val);
  };

  return (
    <div>
      <h1>COUNTER</h1>

      <button onClick={(x) => Numbers(true)}>+</button>

      <button disabled={count < 1} onClick={(x) => Numbers(false)}>
        -
      </button>

      <div className="m-3">
        <p>{count}</p>
      </div>
    </div>
  );
};
