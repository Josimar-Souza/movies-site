import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import ItemsSection from '../components/ItemsSection';
import actions from '../redux/actions/movies/actions';

function MainPage() {
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
      {
        movies.nowPlaying.length > 0
          ? <Hero type="movies" item={movies.nowPlaying[randomIndex]} />
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

export default MainPage;
