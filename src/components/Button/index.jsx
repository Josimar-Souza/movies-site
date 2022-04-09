import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './ButtonStyle';

function Button(props) {
  const {
    children,
    onClick,
    width,
    name,
  } = props;

  return (
    <ButtonStyle
      width={width}
      onClick={onClick}
      name={name}
    >
      { children }
    </ButtonStyle>
  );
}

Button.defaultProps = {
  onClick: () => {},
  width: '50%',
  name: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
