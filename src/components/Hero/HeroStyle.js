import styled from 'styled-components';

const baseImageURL = process.env.REACT_APP_IMAGE_BASE_URL;

const image = (props) => `${baseImageURL}${props.image}`;

const MovieNote = styled.p`
  font-weight: 700;
  color: #2aff00;
`;

const LeftSideFade = styled.div`
  background: linear-gradient(to right, rgba(15, 15, 15, 1), 85%, rgba(15, 15, 15, 0));
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 30%;
`;

const BottomSideFade = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(15, 15, 15, 0.85) 55%, rgba(15, 15, 15, 1));
  bottom: 0;
  height: 10rem;
  margin: 0;
  position: absolute;
  right: 0;
  width: 90%;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

const InfoBlock = styled.div`
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
  LeftSideFade,
  BottomSideFade,
  MovieNote,
};

export default styles;
