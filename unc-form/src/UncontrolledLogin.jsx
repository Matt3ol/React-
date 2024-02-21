import React, { useState } from 'react';

export const ControlledLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <br/>
      <button type="submit">Login</button>
    </form>
  );
};
