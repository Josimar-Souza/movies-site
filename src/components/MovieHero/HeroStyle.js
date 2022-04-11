import styled from 'styled-components';

const baseImageURL = process.env.REACT_APP_IMAGE_BASE_URL;

const image = (props) => `${baseImageURL}${props.image}`;

const MovieNote = styled.p`
  font-weight: 700;
  color: #2aff00;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const InfoBlock = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: space-around;
  margin-left: 15px;
  padding: 15px;
  text-align: center;
  width: 20%;
  z-index: 1;
`;

const HeroStyle = styled.div`
  background-image: url(${image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const styles = {
  HeroStyle,
  InfoBlock,
  InfoSection,
  MovieNote,
};

export default styles;
