import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AlertClock } from "./AlertClock";

function App() {
  function prop() {
    const date = new Date();
    alert(`the time is :${date.toLocaleTimeString()}`);
  }

  return (
    <>
      <AlertClock prop={prop}></AlertClock>
    </>
  );
}

export default App;
