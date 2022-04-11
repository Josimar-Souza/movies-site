import styled from 'styled-components';
import getImageURL from '../../utils/getImageURL';

const image = (props) => getImageURL(props.image);

const MovieDetailsContainer = styled.div`
  background: rgba(48, 48, 48, 0.7);
  margin: 20rem auto 0 auto;
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
};

export default styles;
