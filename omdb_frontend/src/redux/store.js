import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {movieReducer, userReducer} from './reducers';
import rootSaga from './sagas';

const rootReducer = combineReducers({
    movies: movieReducer,
    users : userReducer,
  });

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the root reducer and apply the saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
