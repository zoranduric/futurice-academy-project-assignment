import React from 'react';

const Repo = ({
  name,
  url,
  creationDate,
  updateDate,
  language,
  description,
}) => {
  return (
    <li>
      <a target='blank' href={url}>
        💾 {name}
      </a>
      {description && (
        <p className='repoDescription'>Description: {description}</p>
      )}
      {creationDate && <p>Created at: {creationDate}</p>}
      {updateDate && <p>Updated at: {updateDate}</p>}
      {language && <p>Language: {language}</p>}
    </li>
  );
};

export default Repo;
