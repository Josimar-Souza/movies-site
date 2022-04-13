import styled from 'styled-components';
import getImageURL from '../../utils/getImageURL';

const getBackground = (props) => {
  if (props.image == null) {
    return 'background: #0f0f0f;';
  }

  return `background-image: url(${getImageURL(props.image)});`;
};

const SerieNote = styled.p`
  color: #2aff00;
`;

const SerieTecnicalInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
  width: 90%;
`;

const SerieTitle = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

const SerieInfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50%;
`;

const SeriesDetailsImage = styled.img`
  margin-bottom: 2rem;
  width: 100%;
`;

const SeriesDetailsImageTrailerContainer = styled.div`
  text-align: center;
  width: 40%;
`;

const SeriesDetailsContainer = styled.div`
  border-radius: 15px;
  background: rgba(48, 48, 48, 0.7);
  color: white;
  display: flex;
  justify-content: space-around;
  margin: 5rem auto;
  padding: 2rem;
  width: 85%;
`;

const SeriesDetailsBackground = styled.div`
  ${getBackground}
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const styles = {
  SeriesDetailsBackground,
  SeriesDetailsContainer,
  SeriesDetailsImageTrailerContainer,
  SeriesDetailsImage,
  SerieInfoContainer,
  SerieTitle,
  SerieTecnicalInfo,
  SerieNote,
};

export default styles;
