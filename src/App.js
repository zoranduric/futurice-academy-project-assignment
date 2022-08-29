import { useContext } from 'react';
import { GlobalStyles } from './GlobalStyles.style.js';
import { Container } from './styles';
import Repositories from './components/Repositories';
import DisplayUserData from './components/DisplayUserData';
import SearchUser from './components/SearchUser';
import GithubContext from './context/GithubContext.js';

function App() {
  const { userData, fetchError } = useContext(GithubContext);

  return (
    <div>
      <GlobalStyles />
      <h1>futurice-academy-project-assignment</h1>
      <SearchUser />

      <Container>
        {userData?.user ? <DisplayUserData /> : <p>{fetchError} </p>}
        {userData?.repos ? <Repositories /> : <p>{fetchError} </p>}
      </Container>
    </div>
  );
}

export default App;
