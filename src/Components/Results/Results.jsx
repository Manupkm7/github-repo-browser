import React from "react";

const Results = ({ repos, reposList }) => {
  const { id, bio, avatar_url, name, repos_url, location } = repos || [];

  console.log(reposList.map(({ name }) => console.log(name)));
  return (
    <>
      <ul class="collection">
        {repos.length !== 0 ? (
          <li key={id} class="collection-item avatar">
            <img src={avatar_url} alt="" class="circle" />
            <span class="title">
              {name} : {location}
            </span>
            <p>{bio}</p>
          </li>
        ) : (
          <h2>No user found!</h2>
        )}
        {repos_url &&
          reposList.map(({ name, id, forks, svn_url }) => {
            <li class="collection-item avatar" key={id}>
              <span class="title">Name: {name}</span>
              <p>Forks: {forks}</p>
              <a href={svn_url} class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>;
          })}
      </ul>
    </>
  );
};

export default Results;
