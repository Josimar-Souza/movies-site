import styled from 'styled-components';
import getImageURL from '../../utils/getImageURL';

const image = (props) => getImageURL(props.image);

const MovieNote = styled.p`
  color: #2aff00;
  margin-bottom: 15px;
`;

const MovieGenre = styled.p`
  margin: 0 10px;
`;

const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  width: 90%;
`;

const MovieTecnicalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const MovieOverview = styled.p`
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
  width: 100%;
`;

const MovieDetailsImageContainer = styled.div`
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
  background-image: url(${image});
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
  MovieDetailsImageContainer,
  MovieDetailsImage,
  MovieInfoContainer,
  MovieTitle,
  MovieOverview,
  GenresContainer,
  MovieGenre,
  MovieTecnicalInfo,
  MovieNote,
};

export default styles;
