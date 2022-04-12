import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductionCompaniesCardStyles';
import getImageURL from '../../utils/getImageURL';

function ProductionCompaniesCard({ companie }) {
  const { CompanieCard, CompanieImage } = styles;
  return (
    <CompanieCard>
      <CompanieImage src={getImageURL(companie.logo_path)} />
    </CompanieCard>
  );
}

ProductionCompaniesCard.propTypes = {
  companie: PropTypes.shape({
    logo_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductionCompaniesCard;
