import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setView, userLogout, fetchSavedMovies } from './redux/actions';

function Navbar() {

    const view = useSelector((state) => state.movies.currentView);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLogout());
    };

    const savedMovies = () => {
        dispatch(setView('SAVED_MOVIES'));
        dispatch(fetchSavedMovies());
    };

    const searchview = () =>{
        dispatch(setView('SEARCH_MOVIES'));
    }

  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
        <h1 className="navbar-brand text-center mx-auto">ATG Movie Awards</h1>
        <div>
            {view === 'SAVED_MOVIES' ? (
            <button className="btn btn-primary" onClick={searchview}>Search Movies</button>)
            : 
            (<button className="btn btn-primary" onClick={savedMovies}>Saved Movies </button> )}
          
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
