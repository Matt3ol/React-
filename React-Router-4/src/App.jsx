import { Route, Routes,Link } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  const name = "User";

  return (
    <>
      <div className="link">
        <Link to="/">home</Link>
        <Link to="/Counter">Counter</Link>
        <Link to={`/users/:${name}`}>User</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name={name} />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route path="/users/:username" element={<ShowGithubUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
