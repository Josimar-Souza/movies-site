import styled from 'styled-components';

const ItemImg = styled.img`
  width: 12rem;
`;

const ItemCardStyle = styled.div`
  margin: 0 8px;
  padding: 15px;
  width: 50%;
  transition: 0.2s;

  &:hover {
    transform: scale(1.12, 1.12);
    cursor: pointer;
  }
`;

const styles = {
  ItemImg,
  ItemCardStyle,
};

export default styles;
