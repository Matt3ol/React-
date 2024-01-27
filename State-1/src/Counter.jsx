export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h2> count is {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}></button>
      </div>
    </>
  );
}
