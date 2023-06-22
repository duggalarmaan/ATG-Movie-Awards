import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import SearchMovies from './SearchMovies';
import SavedMovies from './SavedMovies';
import Login from './login';
import Navbar from './navbar';

function App() {
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const view = useSelector((state) => state.movies.currentView);

  return (   
    <div>
      {loggedIn ? (
        <>
          <Navbar />
          {view === 'SEARCH_MOVIES' ? <SearchMovies /> : <SavedMovies />}
        </>
      ) : (
        <Login />
      )}
    </div>   
  );
}

export default App;
