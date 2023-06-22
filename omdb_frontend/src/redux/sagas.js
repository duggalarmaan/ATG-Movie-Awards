import { put, takeLatest, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { searchMoviesSuccess, 
  saveMovieSuccess, 
  deleteMovieSuccess, 
  fetchSavedMoviesSuccess,  
  userRegistrationSuccess, 
  userRegistrationFailure,
  userLoginSuccess,
  userLoginFailure,
  userLogoutSuccess,
  userLogoutFailure,
} from './actions';

function* searchMoviesSaga(action) {
    try {
      const response = yield call(
        axios.get,
        `https://www.omdbapi.com/?s=${action.payload}&type=movie&apikey=4b65d216`
      );     
      yield put(searchMoviesSuccess(response.data.Search));
    } catch (error) {
      console.error(error);
    }
}
  
function* saveMovieSaga(action) {
    try {
      const response = yield call(
        axios.post,
        'http://127.0.0.1:8000/api/movies/',
        action.payload
      );
      yield put(saveMovieSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
}
  
function* deleteMovieSaga(action) {
    try {
      yield call(
        axios.delete,
        `http://127.0.0.1:8000/api/movies/${action.payload}`
      );
      yield put(deleteMovieSuccess(action.payload));
    } catch (error) {
      console.error(error);
    }
}
  
function* fetchSavedMoviesSaga() {
    try {
      const response = yield call(axios.get, 'http://127.0.0.1:8000/api/movies/');     
      yield put(fetchSavedMoviesSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
}

function* userRegistrationSaga(action) {
  try {
  
    yield call(axios.post, 'http://127.0.0.1:8000/api/register/', action.payload);

    yield put(userRegistrationSuccess());
  } catch (error) {
    yield put(userRegistrationFailure(error.message));
  }
}

function* userLoginSaga(action) {
  try {      
    yield call(axios.post, 'http://127.0.0.1:8000/api/login/', action.payload);

    yield put(userLoginSuccess(action.payload));
  } catch (error) {
    yield put(userLoginFailure(error.message));
  }
}

function* userLogoutSaga() {
  try {
    yield call(axios.post, 'http://127.0.0.1:8000/api/logout/');

    yield put(userLogoutSuccess());
  } catch (error) {
    yield put(userLogoutFailure(error.message));
  }
}
  
/* function* saveMovieAsync(action) {
    try {
      const movie = action.payload;
      const response = yield call(fetch, SAVE_MOVIE_API_URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = yield response.json();
      yield put({ type: SAVE_MOVIE_SUCCESS, payload: data });
    } catch (error) {
      // Handle errors if needed
    }
} */


// Saga watcher function
function* watchMovieSaga() {
    yield takeLatest('SEARCH_MOVIES', searchMoviesSaga);
    yield takeLatest('SAVE_MOVIE', saveMovieSaga);
    yield takeLatest('DELETE_MOVIE', deleteMovieSaga);
    yield takeLatest('FETCH_SAVED_MOVIES', fetchSavedMoviesSaga);
}

function* userSaga() {
  yield takeLatest('USER_REGISTRATION', userRegistrationSaga);
  yield takeLatest('USER_LOGIN', userLoginSaga);
  yield takeLatest('USER_LOGOUT', userLogoutSaga);
}
  
export default function* rootSaga() {
    yield all([watchMovieSaga(), userSaga()]);
}

