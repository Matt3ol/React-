import { useState } from "react";
import "./Container.css";

export function Container({ child, title }) {
  const [collapse, setCollapse] = useState(false);

  function handleToggleCollapse() {
    setCollapse(t => !t);
  }

  return (
    <div className="app">
      <div>{title} <button onClick={handleToggleCollapse}>toggle</button></div>
      {collapse && <div>{child}</div>}
    </div>
  );
}
