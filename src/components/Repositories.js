import React from 'react';
import Repo from './Repo';

const Repositories = ({ userData }) => {
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
};

export default Repositories;
