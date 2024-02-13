import "./App.css";
import { GithubUser } from "./GithubUser";

function App() {
  const username = "Matteo";
  return (
    <>
      <GithubUser username={username}></GithubUser>
    </>
  );
}

export default App;
