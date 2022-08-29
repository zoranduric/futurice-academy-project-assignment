import { useContext, useState } from 'react';
import GithubContext from '../context/GithubContext';

const SearchUser = () => {
  const [user, setUser] = useState('');
  const { searchUser } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(user);
    setUser('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter github username</label>
      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search github username'
        value={user}
        onChange={(event) => setUser(event.target.value.trim())}
      ></input>
      {!user ? (
        <button type='submit' disabled>
          Search
        </button>
      ) : (
        <button type='submit'>Search</button>
      )}
    </form>
  );
};

export default SearchUser;
