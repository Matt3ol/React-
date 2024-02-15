import React from "react";
import { useState, useEffect } from "react";

function GitHubUser({ username, children }) {
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      console.log(res.status);
      const userGit = await res.json();
      setUser(userGit);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(user);
  }, [username]);

  return (
    <>
      {user ? (
        <div className="card-user">
          <p>{children}</p>
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

export default GitHubUser;