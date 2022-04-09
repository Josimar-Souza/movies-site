import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './ButtonStyle';

function Button(props) {
  const {
    children,
    onClick,
    width,
  } = props;

  return (
    <ButtonStyle
      width={width}
      onClick={onClick}
    >
      { children }
    </ButtonStyle>
  );
}

Button.defaultProps = {
  onClick: () => {},
  width: '50%',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

export default Button;
