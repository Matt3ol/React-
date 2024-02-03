
import React, {useState} from "react";

export function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox,setCheckbox] = useState ('')

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword= (e) => {
    setPassword(e.target.value);
  };
  const handleCheck= (e) => {
    setCheckbox(e.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username : {username}</label>
        <input type="text" id="username" onChange={handleUsername}></input>
        <label htmlFor="password">Password : {password}</label>
        <input type="text" id="password"onChange={handlePassword}></input>
        <label htmlFor="username">remember</label>
        <input type="checkbox"onChange={handleCheck}></input>
      </form>
      <button>Submit</button>
    </>
  );
}
