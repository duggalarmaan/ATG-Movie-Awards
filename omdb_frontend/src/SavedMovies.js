// SavedMovies.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavedMovies, deleteMovie } from './redux/actions';

function SavedMovies() {
  const dispatch = useDispatch();
  const savedMovies = useSelector((state) => state.movies.savedMovies);

  useEffect(() => {
    dispatch(fetchSavedMovies());
  }, [dispatch]);

  const handleDeleteMovie = (movieId) => {
    dispatch(deleteMovie(movieId));
  };

  return (
    <div>
      <h2>Saved Movies</h2>
      <ul className="list-group">
        {savedMovies.map((movie) => (
          <li key={movie.imdbID} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={movie.Poster} alt={movie.Title} className="mr-3" style={{ width: '100px' }} />
              <div>
                <h5 className="mb-1">{movie.Title}</h5>
                <p className="mb-0">{movie.Year}</p>
              </div>
            </div>
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedMovies;
