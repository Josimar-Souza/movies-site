import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroStyle';

function Hero({ movie }) {
  const {
    HeroStyle,
    InfoBlock,
    InfoSection,
    LeftSideFade,
    BottomSideFade,
  } = styles;

  const formatDate = (date) => {
    const dateList = date.split('-');
    const formattedDate = `${dateList[2]}/${dateList[1]}/${dateList[0]}`;
    return formattedDate;
  };

  console.log(movie);
  return (
    <HeroStyle image={movie.backdrop_path}>
      <InfoBlock>
        <h1>{movie.title}</h1>
        <InfoSection>
          <p>{`Lançamento: ${formatDate(movie.release_date)}`}</p>
          <p>{`Nota: ${movie.vote_average}`}</p>
        </InfoSection>
      </InfoBlock>
      <LeftSideFade />
      <BottomSideFade />
    </HeroStyle>
  );
}

Hero.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default Hero;
