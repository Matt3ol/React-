import React, { useRef } from "react";
export function UncontrolledLogin({ onLogin }) {

  const formRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    
    const formData = new FormData(formRef.current);
    const username = formData.get("username");
    const password = formData.get("password");

    onLogin({ username, password });
  };

  return (
    <>
      <h1>Login</h1>
      <form ref={formRef} onSubmit={handleLogin}>
        <label htmlFor="username">Username : </label>
        <input type="text" id="username"></input>
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password"></input>
        <button type="submit"> Login</button>
      </form>
    </>
  );
}
