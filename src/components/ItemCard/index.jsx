import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ItemCardStyle';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

function ItemCard({ item, type }) {
  const navigate = useNavigate();
  const { ItemCardStyle, ItemImg } = styles;

  const onCardClick = () => {
    navigate(`/details/${type === 'series' ? 'series' : 'movies'}/${item.id}`);
  };

  return (
    <ItemCardStyle onClick={onCardClick}>
      <ItemImg src={`${IMAGE_BASE_URL}${item.poster_path}`} />
    </ItemCardStyle>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default ItemCard;
