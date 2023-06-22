import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './images/background.png';
import Registration from './registration';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
      username: username,
      password: password,
    };
    dispatch(userLogin(userData));
  };

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: 'white',
        }}>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mx-auto">ATG Movie Awards</span>
        </nav>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <button className="btn btn-link" onClick={toggleRegistration}>
              {showRegistration ? 'Cancel' : 'Register'}
            </button>
            {showRegistration && <Registration />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
