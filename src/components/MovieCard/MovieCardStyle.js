import styled from 'styled-components';

const MovieImg = styled.img`
  width: 12rem;
`;

const MovieCardStyle = styled.div`
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
  MovieImg,
  MovieCardStyle,
};

export default styles;
