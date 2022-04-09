import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './ButtonStyle';

function Button(props) {
  const {
    children,
    onClick,
  } = props;

  return (
    <ButtonStyle
      onClick={onClick}
    >
      { children }
    </ButtonStyle>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
