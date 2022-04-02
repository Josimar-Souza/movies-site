import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import actions from '../redux/actions/movies/actions';

function MainPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state[0].movies);
  const randomIndex = Math.floor(Math.random() * movies.nowPlaying.length);

  useEffect(() => {
    dispatch(actions.getNowPlaying());
  }, []);

  return (
    randomIndex && <Hero movie={movies.nowPlaying[randomIndex]} />
  );
}

export default MainPage;
