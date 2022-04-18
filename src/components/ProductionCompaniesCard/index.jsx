import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductionCompaniesCardStyles';
import getImageURL from '../../utils/getImageURL';

function ProductionCompaniesCard({ company }) {
  const { CompanieCard, CompanieImage } = styles;
  return (
    <CompanieCard>
      <CompanieImage src={getImageURL(company.logo_path)} />
      <h3>{company.name}</h3>
    </CompanieCard>
  );
}

ProductionCompaniesCard.propTypes = {
  company: PropTypes.shape({
    logo_path: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductionCompaniesCard;
