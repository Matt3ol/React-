import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      setUsernames([...usernames, searchTerm]);
    }
    setSearchTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br />

        <button type="submit">Search</button>
      </form>

      <ul>
        {usernames.map((user, index) => (
          <li key={index}>
            <GithubUser username={user} ></GithubUser>
          </li>
        ))}
      </ul>
    </div>
  )
}