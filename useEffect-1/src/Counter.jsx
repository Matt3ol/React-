import { useState,useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called!");
  }, [count]);
  return (
    <>
      <div>
        <h2> count is {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}></button>
      </div>
    </>
  );
}
