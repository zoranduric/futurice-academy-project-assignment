import { useContext } from 'react';
import GithubContext from '../context/GithubContext';
// <img src={userData.user.avatar_url} alt='avatar' />
const DisplayUserData = () => {
  const { userData } = useContext(GithubContext);

  const {
    name,
    location,
    public_repos,
    login,
    avatar_url,
    blog,
    company,
    created_at,
    followers,
    following,
  } = userData.user;

  return (
    <div className='userInfoCard'>
      <img src={avatar_url} alt={`${name} avater `} />
      <p> {name} </p>
      {location && <p>Location: {location} </p>}
      {public_repos > 0 ? (
        <p>Repos: {public_repos}</p>
      ) : (
        <p> user has no public repos</p>
      )}
      <p>username: {login} </p>

      {blog && (
        <a alt='website' href={blog}>
          website
        </a>
      )}
      {company && <p>Comapny: {company} </p>}
      <p>Created at: {created_at} </p>
      <p>Followers: {followers} </p>
      <p>Followers: {following} </p>
    </div>
  );
};

export default DisplayUserData;
