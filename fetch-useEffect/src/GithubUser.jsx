import { useEffect } from "react";
import { useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  async function dataFetch() {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const users = await res.json();
      setData(users);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    dataFetch();
  }, [username]);

  return (
    <>
      {user ? (
        <div className="card-user">
          <h3>{user.name}</h3>
          <p>{user.login}</p>
          <div>
            <img className="avatar" src={user.avatar_url} alt="avatar" />
          </div>
        </div>
      ) : null}
    </>
  );
}
