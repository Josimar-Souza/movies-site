import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieSectionStyle';
import MovieCard from '../MovieCard';

function MovieSection(props) {
  const { MovieSectionStyle, Movies } = styles;
  const {
    title,
    movies,
  } = props;

  return (
    <MovieSectionStyle>
      <h1>{title}</h1>
      <Movies>
        {
          movies.map((movie) => <MovieCard movie={movie} />)
        }
      </Movies>
    </MovieSectionStyle>
  );
}

MovieSection.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.shape([]).isRequired,
};

export default MovieSection;
