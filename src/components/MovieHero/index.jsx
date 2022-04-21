import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesHeroStyle';
import Button from '../Button';
import LeftSideFade from '../LeftSideFade';
import BottomSideFade from '../BottomSideFade';

function MovieHero({ Movie }) {
  const navigate = useNavigate();

  const {
    HeroStyle,
    InfoBlock,
    InfoSection,
    MovieNote,
  } = styles;

  const formatDate = (date) => {
    const dateList = date.split('-');
    return dateList[0];
  };

  const onDetailsClick = () => {
    navigate(
      `/movies/details/${Movie.id}`,
    );
  };

  // console.log(movie);
  return (
    <HeroStyle image={Movie.backdrop_path}>
      <InfoBlock>
        <h1 data-testid="hero-movie-title">{Movie.title}</h1>
        <InfoSection>
          <p data-testid="hero-movie-year">{`${formatDate(Movie.release_date)}`}</p>
          <MovieNote data-testid="hero-movie-note">{`Nota: ${Movie.vote_average}`}</MovieNote>
        </InfoSection>
        <Button
          onClick={onDetailsClick}
          width="60%"
        >
          Ver detalhes
        </Button>
      </InfoBlock>
      <LeftSideFade />
      <BottomSideFade />
    </HeroStyle>
  );
}

MovieHero.propTypes = {
  Movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieHero;
