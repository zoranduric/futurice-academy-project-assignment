import React from 'react';

const Repo = ({ name, url, creationDate, updateDate, language }) => {
  return (
    <li>
      <p></p>
      <a target='blank' href={url}>
        {name}
      </a>
      <p>{url}</p>
      <p>{creationDate}</p>
      <p>{updateDate}</p>
      <p>{language}</p>
    </li>
  );
};

export default Repo;
