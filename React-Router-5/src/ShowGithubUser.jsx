import React from "react";
import { useParams } from "react-router-dom";
import GitHubUser from "./GithubUser";

export default function ShowGithubUser() {
    const { username } = useParams();

  return (
    <>
      <GitHubUser username={username}></GitHubUser>
    </>
  );
}