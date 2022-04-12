import styled from 'styled-components';
import getImageURL from '../../utils/getImageURL';

const getBackground = (props) => {
  if (props.image == null) {
    return 'background: #0f0f0f;';
  }

  return `background-image: url(${getImageURL(props.image)});`;
};

const ProductionCompaniesContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const MovieNote = styled.p`
  color: #2aff00;
`;

const MovieGenre = styled.p`
  margin: 0 10px;
`;

const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  width: 90%;
`;

const MovieTecnicalInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
  width: 90%;
`;

const MovieOverview = styled.p`
  margin: 15px 0;
  text-align: justify;
`;

const MovieTitle = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

const MovieInfoContainer = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50%;
`;

const MovieDetailsImage = styled.img`
  margin-bottom: 2rem;
  width: 100%;
`;

const MovieDetailsImageTrailerContainer = styled.div`
  text-align: center;
  width: 40%;
`;

const MovieDetailsContainer = styled.div`
  border-radius: 15px;
  background: rgba(48, 48, 48, 0.7);
  color: white;
  display: flex;
  justify-content: space-around;
  margin: 5rem auto;
  padding: 2rem;
  width: 85%;
`;

const DetailsBackgorund = styled.div`
  ${getBackground}
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const styles = {
  DetailsBackgorund,
  MovieDetailsContainer,
  MovieDetailsImageTrailerContainer,
  MovieDetailsImage,
  MovieInfoContainer,
  MovieTitle,
  MovieOverview,
  GenresContainer,
  MovieGenre,
  MovieTecnicalInfo,
  MovieNote,
  ProductionCompaniesContainer,
};

export default styles;
