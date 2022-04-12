import React from 'react';
import PropTypes from 'prop-types';
import TrailerIframe from './TrailerStyles';

function Trailer({ trailerKey }) {
  const getTrailerURL = () => `https://www.youtube.com/embed/${trailerKey}`;

  return (
    <TrailerIframe
      src={getTrailerURL()}
      title="Youtube video player"
      allowFullScreen
      frameBorder="0"
    />
  );
}

Trailer.propTypes = {
  trailerKey: PropTypes.string.isRequired,
};

export default Trailer;
