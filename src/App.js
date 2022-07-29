import { useState, useEffect } from 'react';
import { GlobalStyles } from './GlobalStyles.style.js';
import { Container } from './styles';
import Repositories from './components/Repositories';
import DisplayUserData from './components/DisplayUserData';
import SearchUser from './components/SearchUser';

function App() {
  const [user, setUser] = useState('');
  // api response
  const [userData, setUserData] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState('leonardomso');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `https://api.github.com/users/${apiEndpoint}`;
  const REPO_URL = `https://api.github.com/users/${apiEndpoint}/repos`;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setApiEndpoint(user);
    setUser('');
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw Error('Did not recive a response from the server');

        const apiData = await response.json();
        const repoFetch = await fetch(REPO_URL);
        if (!repoFetch.ok)
          throw Error('Did not recive a response from the server');
        const repoData = await repoFetch.json();
        setUserData({
          user: apiData,
          repos: repoData,
        });
        //setUserData(apiData);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [API_URL, REPO_URL]);

  return (
    <div>
      <GlobalStyles />
      <h1>futurice-academy-project-assignment</h1>
      <SearchUser user={user} setUser={setUser} handleSubmit={handleSubmit} />
      <Container>
        {userData ? (
          <DisplayUserData userData={userData} />
        ) : (
          <p>{fetchError}</p>
        )}

        <Repositories userData={userData} />
      </Container>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
