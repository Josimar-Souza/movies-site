import styled from 'styled-components';

const baseImageURL = process.env.REACT_APP_IMAGE_BASE_URL;

const image = (props) => `${baseImageURL}${props.image}`;

const SerieNote = styled.p`
  font-weight: 700;
  color: #2aff00;
`;

const SeriesInfoSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SeriesInfoBlock = styled.div`
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

const SeriesHeroStyle = styled.div`
  background-image: url(${image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const styles = {
  SeriesHeroStyle,
  SeriesInfoBlock,
  SeriesInfoSection,
  SerieNote,
};

export default styles;
