import React from 'react';
import PropTypes from 'prop-types';
import TrailerIframe from './TrailerStyles';

function Trailer({ trailerKey, testId }) {
  const getTrailerURL = () => `https://www.youtube.com/embed/${trailerKey}`;
  return (
    <TrailerIframe
      src={getTrailerURL()}
      title="Youtube video player"
      allowFullScreen
      frameBorder="0"
      data-testid={testId}
    />
  );
}

Trailer.defaultProps = {
  trailerKey: '',
  testId: '',
};

Trailer.propTypes = {
  trailerKey: PropTypes.string,
  testId: PropTypes.string,
};

export default Trailer;
