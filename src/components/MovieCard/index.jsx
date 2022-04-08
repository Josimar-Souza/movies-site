import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCardStyle';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { MovieCardStyle, MovieImg } = styles;

  const onCardClick = () => {
    navigate(`/details/movie/${movie.id}`);
  };

  return (
    <MovieCardStyle onClick={onCardClick}>
      <MovieImg src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
    </MovieCardStyle>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
