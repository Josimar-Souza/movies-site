import React from 'react';
import styles from './HeaderStyles';
import Button from '../Button';

function Header() {
  const { HeaderContainer, HeaderStyle } = styles;
  return (
    <HeaderContainer>
      <HeaderStyle>
        <Button
          width="15%"
        >
          Filmes
        </Button>
        <Button
          width="15%"
        >
          Séries
        </Button>
      </HeaderStyle>
    </HeaderContainer>
  );
}

export default Header;
