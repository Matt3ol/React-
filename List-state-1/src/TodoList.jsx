import { useState } from "react";

export function TodoList({list}) {
  const [todos, setTodos] = useState(list);

  function handleSubmit(e) {
    e.preventDefault();

    const value = e.target[0].value;
    setTodos([...todos, value]);
    e.target[0].value = "";
  }

  return (
    <>
      <h2>List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>submit</button>
      </form>
    </>
  );
}
