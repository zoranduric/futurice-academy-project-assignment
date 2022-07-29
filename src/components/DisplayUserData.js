import React from 'react';

const DisplayUserData = ({ userData }) => {
  return (
    <div className='userInfoCard'>
      <img src={userData.user.avatar_url} alt='avatar' />
      <section>
        {userData.user.login && <p>Username: {userData.user.login} </p>}
        {userData.user.name && <p>Name: {userData.user.name}</p>}
        {userData.user.location && <p>Location: {userData.user.location}</p>}
        {userData.user.public_repos && (
          <p>Repositories: {userData.user.public_repos}</p>
        )}
        {userData.user.following && <p>Following: {userData.user.following}</p>}
        {userData.user.followers && <p>Followers: {userData.user.followers}</p>}
      </section>
    </div>
  );
};

export default DisplayUserData;
