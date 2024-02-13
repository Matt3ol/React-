import "./App.css";
import { GitHubUser } from "./GitHubUser";

function App() {
  const username = "Matteo";

  return (
    <>
      <GitHubUser username={username}></GitHubUser>
    </>
  );
}

export default App;
