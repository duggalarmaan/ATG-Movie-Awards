// reducers.js

const initialState = {
  searchResults: [],
  savedMovies: [],
  currentView: 'SEARCH_MOVIES',
  loggedIn: false,
  loading: false,
  error: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, currentView: action.payload };
    case 'SEARCH_MOVIES_SUCCESS':    
      return { ...state, searchResults: action.payload };
    case 'FETCH_SAVED_MOVIES_SUCCESS':
        return { ...state, savedMovies: action.payload };
    case 'SAVE_MOVIE_SUCCESS':
      return { ...state, savedMovies: [...state.savedMovies, action.payload] };
    case 'DELETE_MOVIE_SUCCESS':
      return {
        ...state,
        savedMovies: state.savedMovies.filter(movie => movie.id !== action.payload),
      };   
    default:
      return state;
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':     
      return { ...state, loggedIn: true, loading: false, user: action.payload, error: null };
    case 'USER_LOGIN_FAILURE':
      return { ...state, loggedIn: false, loading: false, error: action.payload };
    case 'USER_LOGOUT_SUCCESS':
      return { ...state, loggedIn: false, loading: false, user: null, error: null };
    case 'USER_LOGOUT_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};