// SearchMovies.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, saveMovie, fetchSavedMovies } from './redux/actions';
import axios from 'axios';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.movies.searchResults);  
  const savedMovies = useSelector((state) => state.movies.savedMovies);
  const loggeduser = useSelector((state) => state.users.user);


  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(query));
  };

  const handleSaveMovie = async (movie) => {    
    try {
        const response = await axios.get(
          `https://www.omdbapi.com/?t=${movie.Title}&type=movie&apikey=4b65d216`
        );
        
        const movieDetails = response.data;

        /*
        const movieDetails = {
          ...response.data,
          user: loggeduser.username,
        };  
        
        if (response.data.DVD !== null && response.data.Released !== null) {
        movieDetails.DVD = `${new Date(response.data.DVD).getFullYear()}-${new Date(response.data.DVD).getMonth()+1}-${new Date(response.data.DVD).getDay()}`;
        movieDetails.Released = `${new Date(response.data.Released).getFullYear()}-${new Date(response.data.Released).getMonth()+1}-${new Date(response.data.Released).getDay()+1}`;
        } */
        movieDetails.Website = response.data.website === "N/A" ? null : response.data.website;
      
        dispatch(saveMovie(movieDetails));
        dispatch(fetchSavedMovies());               
    } 
    catch (error) {
        console.error(error);
    }   
  };

  const isMovieSaved = (movie) => {
    return savedMovies.some((savedMovie) => savedMovie.Title === movie.Title);
  };

  const showBanner = savedMovies.length >= 5;

  return (
     <div className="container mt-5">
      <form onSubmit={handleSearch} className="mb-3">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>

      {showBanner && <div className="alert alert-info">You have 5 movies saved!</div>}
      
      <ul className="list-group">
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <li key={movie.imdbID} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={movie.Poster} alt={movie.Title} className="mr-3" style={{ width: '100px' }} />
                <div>
                  <h5 className="mb-1">{movie.Title}</h5>
                  <p className="mb-0">{movie.Year}</p>
                </div>
              </div>
              {isMovieSaved(movie) ? (
                <button disabled className="btn btn-secondary">Save</button>
              ) : (
                <button onClick={() => handleSaveMovie(movie)} className="btn btn-primary">Save</button>
              )}
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchMovies;
