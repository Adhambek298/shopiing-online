import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(1);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="settout">
      <button className="bg-btn" onClick={increase}>
        +
      </button>
      <h1>{count}</h1>
      <button className="bg-btn" onClick={decrease}>-</button>
    </div>
  );
}

export default CounterApp;
