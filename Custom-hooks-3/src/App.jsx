import "./App.css";
import { GitHubUser } from "./GithubUser";

function App() {
  const username = "Matteo";
  return (
    <>
      <GitHubUser username={username}></GitHubUser>
    </>
  );
}

export default App;
