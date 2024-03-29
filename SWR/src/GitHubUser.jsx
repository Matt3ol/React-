import React from "react";
import useGitHubUser from "./UseGitHubUser";

function GitHubUser({ username }) {
  const { user, error, isLoading } = useGitHubUser({ username });

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>an error is occurred</h3>}
      {user && (
        <div className="card-user">
          <h3>{user.name}</h3>
          <p>{user.login}</p>
          <div>
            <img className="avatar" src={user.avatar_url} alt="avatar" />
          </div>
        </div>
      )}
    </>
  );
}

export default GitHubUser;