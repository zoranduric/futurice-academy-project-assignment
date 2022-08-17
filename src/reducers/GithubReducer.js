const githubReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        fetchError: true,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
