import React from 'react';

const SearchUser = ({ user, setUser, handleSubmit }) => {
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
