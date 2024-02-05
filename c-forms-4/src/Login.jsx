import React, { useState } from "react";

export function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin({ username, password });
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  const isButtonDisabled = !username || !password;

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin} disabled={isButtonDisabled}>
        Login
      </button>

      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
