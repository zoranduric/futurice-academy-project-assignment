import { useState, useEffect } from 'react';
import Repositories from './components/Repositories';
import DisplayUserData from './components/DisplayUserData';
import SearchUser from './components/SearchUser';

function App() {
  const [user, setUser] = useState('');
  // api response
  const [userData, setUserData] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState('Zokiu');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `https://api.github.com/users/${apiEndpoint}/repos`;

  const handleSubmit = (event) => {
    event.preventDefault();

    setApiEndpoint(user);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw Error('Did not recive a response from the server');
        const apiData = await response.json();
        setUserData(apiData);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, [API_URL]);

  return (
    <div>
      <p>futurice-academy-project-assignment</p>
      <SearchUser user={user} setUser={setUser} handleSubmit={handleSubmit} />
      <DisplayUserData />

      <Repositories userData={userData} />

      <Repositories />
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
