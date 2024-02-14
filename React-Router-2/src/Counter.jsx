import { useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleCounterIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleCounterIncrement}>premi</button>
      <br />
      <br />
      <Link to="/Welcome">welcome</Link>
    </>
  );
}