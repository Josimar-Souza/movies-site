import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import MovieSection from '../components/MovieSection';
import actions from '../redux/actions/movies/actions';

function MainPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state[0].movies);
  const randomIndex = Math.floor(Math.random() * (movies.nowPlaying.length - 1));

  useEffect(() => {
    dispatch(actions.getNowPlaying());
    dispatch(actions.getPopular());
    dispatch(actions.getTopRated());
    dispatch(actions.getUpcoming());
  }, []);

  return (
    <main>
      {
        movies.nowPlaying.length > 0
          ? <Hero movie={movies.nowPlaying[randomIndex]} />
          : <h1>Loading</h1>
      }
      <MovieSection
        title="No Cinema"
        movies={movies.nowPlaying}
      />
      <MovieSection
        title="Filmes Populares"
        movies={movies.popular}
      />
      <MovieSection
        title="Mais Votados"
        movies={movies.topRated}
      />
      <MovieSection
        title="Em Breve"
        movies={movies.upcoming}
      />
    </main>
  );
}

export default MainPage;
