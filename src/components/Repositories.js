import React from 'react';
import Repo from './Repo';

const Repositories = ({ userData }) => {
  return (
    <ul>
      {userData &&
        userData.map((repo) => (
          <Repo
            key={repo.id}
            name={repo.name}
            url={repo.html_url}
            creationDate={repo.created_at}
            updateDate={repo.updated_at}
            language={repo.language}
          />
        ))}
    </ul>
  );
};

export default Repositories;
