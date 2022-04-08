import styled from 'styled-components';

const Movies = styled.div`
  display: flex;
  height: fit-content;
  margin-top: 15px;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 15px;
    background: #1e1e1e;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: black;
  }
`;

const MovieSectionStyle = styled.div`
  background: #0f0f0f;
  color: white;
  padding 25px 0 25px 15px;
  width: 100%;
`;

const styles = {
  Movies,
  MovieSectionStyle,
};

export default styles;
