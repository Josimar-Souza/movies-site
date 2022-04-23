import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductionCompaniesCardStyles';
import getImageURL from '../../utils/getImageURL';

function ProductionCompaniesCard({ company }) {
  const { CompanieCard, CompanieImage } = styles;
  return (
    <CompanieCard>
      <CompanieImage data-testid="company-card-image" src={getImageURL(company.logo_path)} alt={`Imagem de ${company.name}`} />
      <h3 data-testid="company-card-title">{company.name}</h3>
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
