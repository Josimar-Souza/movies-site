import styled from 'styled-components';

const baseImageURL = process.env.REACT_APP_IMAGE_BASE_URL;

const image = (props) => `${baseImageURL}${props.image}`;

const InfoBlock = styled.div`
  background: rgba(216, 216, 216, 0.4);
  border-radius: 15px;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.5);
  color: white;
  margin-left: 15px;
  padding: 15px;
  width: 25%;
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
};

export default styles;
