import React from 'react';

const DisplayUserData = ({ userData }) => {
  return (
    <div className='userInfoCard'>
      <img src={userData.user.avatar_url} alt='avatar' />
      <p>{userData.user.login}</p>
      <p>{userData.user.name}</p>
      <p>{userData.user.location}</p>
      <p>{userData.user.public_repos}</p>
      <p>{userData.user.following}</p>
      <p>{userData.user.followers}</p>
    </div>
  );
};

export default DisplayUserData;
