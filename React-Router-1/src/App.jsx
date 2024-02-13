import { Route, Routes, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name={name} />}></Route>
      </Routes>
    </>
  );
}

export default App;
