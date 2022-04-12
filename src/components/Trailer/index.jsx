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

Trailer.defaultProps = {
  trailerKey: '',
};

Trailer.propTypes = {
  trailerKey: PropTypes.string,
};

export default Trailer;
