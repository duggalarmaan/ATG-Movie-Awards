// Redux Actions
export const SET_VIEW = 'SET_VIEW'
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const FETCH_SAVED_MOVIES = 'FETCH_SAVED_MOVIES';
export const FETCH_SAVED_MOVIES_SUCCESS = 'FETCH_SAVED_MOVIES_SUCCESS';
export const SAVE_MOVIE = 'SAVE_MOVIE';
export const SAVE_MOVIE_SUCCESS = 'SAVE_MOVIE_SUCCESS';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';


// Redux Action Creators
export const searchMovies = (query) => ({
  type: 'SEARCH_MOVIES',
  payload: query,
});

export const searchMoviesSuccess = (movies) => ({
    type: 'SEARCH_MOVIES_SUCCESS',
    payload: movies,
});

export const fetchSavedMovies = () => ({
    type: 'FETCH_SAVED_MOVIES',
});
  
export const fetchSavedMoviesSuccess = (savedMovies) => ({
    type: 'FETCH_SAVED_MOVIES_SUCCESS',
    payload: savedMovies,
});

export const setView = (currentView) => ({
    type: 'SET_VIEW',
    payload: currentView,
});

export const saveMovie = (movie) => ({
  type: 'SAVE_MOVIE',
  payload: movie,
});

export const saveMovieSuccess = (movie) => ({
    type: 'SAVE_MOVIE_SUCCESS',
    payload: movie,
});

export const deleteMovie = (movieId) => ({
    type: 'DELETE_MOVIE',
    payload: movieId,
});
  
export const deleteMovieSuccess = (movieId) => ({
    type: 'DELETE_MOVIE_SUCCESS',
    payload: movieId,
});


// Redux Actions for User Authentication
export const USER_REGISTRATION = 'USER_REGISTRATION';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';


export const userRegistration = (userData) => ({
    type: 'USER_REGISTRATION',
    payload: userData,
});
  
export const userRegistrationSuccess = () => ({
    type: 'USER_REGISTRATION_SUCCESS',
});
  
export const userRegistrationFailure = (error) => ({
    type: 'USER_REGISTRATION_FAILURE',
    payload: error,
});
  
export const userLogin = (userData) => ({
    type: 'USER_LOGIN',
    payload: userData,
});
  
export const userLoginSuccess = (userData) => ({
    type: 'USER_LOGIN_SUCCESS',
    payload: userData,
});
  
export const userLoginFailure = (error) => ({
    type: 'USER_LOGIN_FAILURE',
    payload: error,
});
  
export const userLogout = () => ({
    type: 'USER_LOGOUT',
});
  
export const userLogoutSuccess = () => ({
    type: 'USER_LOGOUT_SUCCESS',
});
  
export const userLogoutFailure = (error) => ({
    type: 'USER_LOGOUT_FAILURE',
    payload: error,
});