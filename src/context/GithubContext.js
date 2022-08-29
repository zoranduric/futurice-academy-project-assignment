import { useReducer } from 'react';
import { createContext } from 'react';
import githubReducer from '../reducers/GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: '',
    isLoading: true,
    fetchError: null,
    apiEndpoint: 'leonardomso',
    userData: null,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUserAndRepos = async (user = 'leonardomso') => {
    try {
      setLoading(true);
      const userFetch = await fetch(`https://api.github.com/users/${user}`);
      const userData = await userFetch.json();
      const repoFetch = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const repoData = await repoFetch.json();
      dispatch({
        type: 'SET_USER_DATA',
        payload: {
          user: userData,
          repos: repoData,
        },
      });
      setLoading(false);
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
      });
    }

    // finally { setLoading(false)}
    console.log('end of user & repo request');
  };

  const setLoading = (condition) => {
    dispatch({ type: 'SET_LOADING', payload: condition });
  };

  const searchUser = (user) => {
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
    console.log('search user function');
    fetchUserAndRepos(user);
  };
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        fetchError: state.fetchError,
        apiEndpoint: state.apiEndpoint,
        userData: state.userData,
        setLoading,
        searchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
