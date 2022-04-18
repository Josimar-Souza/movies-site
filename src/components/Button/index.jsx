import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './ButtonStyle';

function Button(props) {
  const {
    children,
    onClick,
    width,
    fontSize,
    name,
  } = props;

  return (
    <ButtonStyle
      width={width}
      fontSize={fontSize}
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
  fontSize: '20px',
  name: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
