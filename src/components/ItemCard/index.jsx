import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ItemCardStyle';
import getImageURL from '../../utils/getImageURL';

function ItemCard({ item, type, testId }) {
  const navigate = useNavigate();
  const { ItemCardStyle, ItemImg } = styles;

  const onCardClick = () => {
    navigate(
      `/${type === 'series' ? 'series' : 'movies'}/details/${item.id}`,
    );
  };

  const getName = () => {
    if (type === 'series') {
      return item.name;
    }

    return item.title;
  };

  return (
    <ItemCardStyle data-testid={testId} onClick={onCardClick}>
      <ItemImg src={getImageURL(item.poster_path)} alt={`Imagem de ${getName()}`} />
    </ItemCardStyle>
  );
}

ItemCard.defaultProps = {
  type: 'movies',
  testId: '',
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
  testId: PropTypes.string,
};

export default ItemCard;
