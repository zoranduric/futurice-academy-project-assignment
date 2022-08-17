import { useState, useContext, useEffect } from 'react';
import { GlobalStyles } from './GlobalStyles.style.js';
import { Container } from './styles';
import Repositories from './components/Repositories';
import DisplayUserData from './components/DisplayUserData';
import SearchUser from './components/SearchUser';
import GithubContext from './context/GithubContext';
import { GithubProvider } from './context/GithubContext';
//TODO: namjesti useEffect
function App() {
  const { userData, searchUser } = useContext(GithubContext);
  // <Repositories userData={userData} />
  useEffect(() => {
    searchUser();
  }, [userData]);

  return (
    <GithubProvider>
      <div>
        <GlobalStyles />
        <h1>futurice-academy-project-assignment</h1>
        <SearchUser />
        <Container>
          <DisplayUserData />
        </Container>
      </div>
    </GithubProvider>
  );
}

export default App;
