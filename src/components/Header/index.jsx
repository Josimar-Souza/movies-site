import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderStyles';
import Button from '../Button';

function Header() {
  const navigate = useNavigate();
  const { HeaderContainer, HeaderStyle } = styles;

  const onButtonClick = ({ target: { name } }) => {
    if (name === 'series') {
      navigate('/series');
    } else {
      navigate('/movies');
    }
  };

  return (
    <HeaderContainer>
      <HeaderStyle>
        <Button
          width="15%"
          fontSize="16px"
          onClick={onButtonClick}
          name="movies"
        >
          Filmes
        </Button>
        <Button
          width="15%"
          fontSize="16px"
          onClick={onButtonClick}
          name="series"
        >
          Séries
        </Button>
      </HeaderStyle>
    </HeaderContainer>
  );
}

export default Header;
