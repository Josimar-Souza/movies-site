import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemsSectionStyle';
import ItemCard from '../ItemCard';

function ItemsSection(props) {
  const { ItemsSectionStyle, Items } = styles;
  const {
    title,
    items,
    type,
  } = props;

  return (
    <ItemsSectionStyle>
      <h1>{title}</h1>
      <Items>
        {
          items.map((item) => <ItemCard testId={`item-${title}`} key={item.id} item={item} type={type} />)
        }
      </Items>
    </ItemsSectionStyle>
  );
}

ItemsSection.defaultProps = {
  type: 'movies',
};

ItemsSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.string,
};

export default ItemsSection;
