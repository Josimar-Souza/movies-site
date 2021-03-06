import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './SeriesHeroStyles';
import Button from '../Button';
import LeftSideFade from '../LeftSideFade';
import BottomSideFade from '../BottomSideFade';

function SeriesHero({ serie }) {
  const navigate = useNavigate();

  const {
    SeriesHeroStyle,
    SeriesInfoBlock,
    SeriesInfoSection,
    SerieNote,
  } = styles;

  const formatDate = (date) => {
    const dateList = date.split('-');
    return dateList[0];
  };

  const onDetailsClick = () => {
    navigate(
      `/series/details/${serie.id}`,
    );
  };

  return (
    <SeriesHeroStyle image={serie.backdrop_path}>
      <SeriesInfoBlock>
        <h1 data-testid="hero-serie-name">{serie.name}</h1>
        <SeriesInfoSection>
          <p data-testid="hero-serie-year">{`${formatDate(serie.first_air_date)}`}</p>
          <SerieNote data-testid="hero-serie-note">{`Nota: ${serie.vote_average}`}</SerieNote>
        </SeriesInfoSection>
        <Button
          onClick={onDetailsClick}
          width="60%"
        >
          Ver detalhes
        </Button>
      </SeriesInfoBlock>
      <LeftSideFade />
      <BottomSideFade />
    </SeriesHeroStyle>
  );
}

SeriesHero.propTypes = {
  serie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    backdrop_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    first_air_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default SeriesHero;
