import React from 'react';
import Repo from './Repo';

const Repositories = ({ userData }) => {
  if (userData.repos && userData.repos.length > 0) {
    return (
      <ul>
        {userData &&
          userData.repos.map((repo) => (
            <Repo
              key={repo.id}
              name={repo.name}
              url={repo.html_url}
              creationDate={repo.created_at}
              updateDate={repo.updated_at}
              language={repo.language}
              description={repo.description}
            />
          ))}
      </ul>
    );
  } else {
    return <p>No repositories found</p>;
  }
};

export default Repositories;
