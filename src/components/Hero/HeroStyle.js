import styled from 'styled-components';

const baseImageURL = process.env.REACT_APP_IMAGE_BASE_URL;

const image = (props) => `${baseImageURL}${props.image}`;

const LeftSideFade = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 1), 85%, rgba(0, 0, 0, 0));
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
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85) 55%, rgba(0, 0, 0, 1));
  bottom: 0;
  height: 10rem;
  margin: 0;
  position: absolute;
  right: 0;
  width: 90%;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const InfoBlock = styled.div`
  background: rgba(216, 216, 216, 0.4);
  border-radius: 15px;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.5);
  color: white;
  margin-left: 15px;
  padding: 15px;
  width: 30%;
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
};

export default styles;
