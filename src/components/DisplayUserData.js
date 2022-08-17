import { useContext } from 'react';
import GithubContext from '../context/GithubContext';
// <img src={userData.user.avatar_url} alt='avatar' />
const DisplayUserData = () => {
  const { userData } = useContext(GithubContext);

  if (userData.length <= 0) {
    console.log('userData is null');
  } else {
    return console.log(userData.user.login);
  }

  return (
    <div style={{ marginRight: '12px' }}>
      <p> Text</p>
      {userData?.user?.login ? (
        <div> {userData.user.login} </div>
      ) : (
        <div> no input </div>
      )}
    </div>
  );
};

export default DisplayUserData;
