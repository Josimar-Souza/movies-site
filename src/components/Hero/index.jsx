import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroStyle';

function Hero({ movie }) {
  const { HeroStyle, InfoBlock } = styles;

  console.log(movie);
  return (
    <HeroStyle image={movie.backdrop_path}>
      <InfoBlock>
        <h1>{movie.title}</h1>
      </InfoBlock>
    </HeroStyle>
  );
}

Hero.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
