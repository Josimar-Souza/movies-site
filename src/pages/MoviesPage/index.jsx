import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieHero from '../../components/MovieHero';
import ItemsSection from '../../components/ItemsSection';
import actions from '../../redux/actions/movies/actions';
import Header from '../../components/Header';

function MoviesPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  const randomIndex = Math.floor(Math.random() * (movies.nowPlaying.length - 1));

  useEffect(() => {
    dispatch(actions.getNowPlaying());
    dispatch(actions.getPopular());
    dispatch(actions.getTopRated());
    dispatch(actions.getUpcoming());
  }, []);

  return (
    <section>
      <Header />
      {
        movies.nowPlaying.length > 0
          ? <MovieHero Movie={movies.nowPlaying[randomIndex]} />
          : <h1>Loading</h1>
      }
      <ItemsSection
        title="Filmes no cinema"
        items={movies.nowPlaying}
        type="movies"
      />
      <ItemsSection
        title="Filmes populares"
        items={movies.popular}
        type="movies"
      />
      <ItemsSection
        title="Filmes mais votados"
        items={movies.topRated}
        type="movies"
      />
      <ItemsSection
        title="Filmes que sairão em breve"
        items={movies.upcoming}
        type="movies"
      />
    </section>
  );
}

export default MoviesPage;
