import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCardStyle';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

function MovieCard({ movie }) {
  const { MovieCardStyle, MovieImg } = styles;
  console.log(movie);
  return (
    <MovieCardStyle>
      <MovieImg src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
    </MovieCardStyle>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
