import styled from 'styled-components';
import getImageURL from '../../utils/getImageURL';

const getBackground = (props) => {
  if (props.image == null) {
    return 'background: #0f0f0f;';
  }

  return `background-image: url(${getImageURL(props.image)});`;
};

const DetailsBackgorund = styled.div`
  ${getBackground}
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const DetailsContainer = styled.div`
  border-radius: 15px;
  background: rgba(48, 48, 48, 0.7);
  color: white;
  display: flex;
  justify-content: space-around;
  margin: 5rem auto;
  padding: 2rem;
  width: 85%;
`;

const DetailsImageTrailerContainer = styled.div`
  text-align: center;
  width: 40%;
`;

const DetailsImage = styled.img`
  margin-bottom: 2rem;
  width: 100%;
`;

const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

const Overview = styled.p`
  margin: 15px 0;
  text-align: justify;
`;

const TecnicalInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
  width: 90%;
`;

const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  width: 90%;
`;

const Genre = styled.p`
  margin: 0 10px;
`;

const Note = styled.p`
  color: #2aff00;
`;

const ProductionCompaniesContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const styles = {
  DetailsBackgorund,
  DetailsContainer,
  DetailsImageTrailerContainer,
  DetailsImage,
  InfoContainer,
  Title,
  Overview,
  GenresContainer,
  TecnicalInfo,
  Genre,
  Note,
  ProductionCompaniesContainer,
};

export default styles;
