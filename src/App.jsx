import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import movieActions from './redux/actions/movies/actions';
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { getNowPlaying, getPopular, getTopRated } = movieActions;

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getTopRated());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
