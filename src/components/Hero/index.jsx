import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HeroStyle';
import Button from '../Button';

function Hero({ item, type }) {
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
    navigate(
      `/${type === 'series' ? 'series' : 'movies'}/details/${item.id}`,
    );
  };

  const getTitle = () => {
    if (type === 'series') {
      return item.name;
    }

    return item.title;
  };

  // console.log(movie);
  return (
    <HeroStyle image={item.backdrop_path}>
      <InfoBlock>
        <h1>{getTitle()}</h1>
        <InfoSection>
          <p>{`${formatDate(item.release_date)}`}</p>
          <MovieNote>{`Nota: ${item.vote_average}`}</MovieNote>
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

Hero.defaultProps = {
  type: 'movies',
  item: {
    name: '',
    title: '',
  },
};

Hero.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  type: PropTypes.string,
};

export default Hero;
