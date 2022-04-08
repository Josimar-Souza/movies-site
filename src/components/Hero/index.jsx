import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HeroStyle';
import Button from '../Button';

function Hero({ movie }) {
  const navigate = useNavigate();

  const {
    HeroStyle,
    InfoBlock,
    InfoSection,
    LeftSideFade,
    BottomSideFade,
    MovieNote,
  } = styles;

  const formatDate = (date) => {
    const dateList = date.split('-');
    return dateList[0];
  };

  const onDetailsClick = () => {
    navigate(`/details/movie/${movie.id}`);
  };

  // console.log(movie);
  return (
    <HeroStyle image={movie.backdrop_path}>
      <InfoBlock>
        <h1>{movie.title}</h1>
        <InfoSection>
          <p>{`${formatDate(movie.release_date)}`}</p>
          <MovieNote>{`Nota: ${movie.vote_average}`}</MovieNote>
        </InfoSection>
        <Button
          onClick={onDetailsClick}
        >
          Ver detalhes
        </Button>
      </InfoBlock>
      <LeftSideFade />
      <BottomSideFade />
    </HeroStyle>
  );
}

Hero.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default Hero;
