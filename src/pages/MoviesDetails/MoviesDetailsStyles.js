import styled from 'styled-components';
import getImageURL from '../../utils/getImageURL';

const image = (props) => getImageURL(props.image);

const DetailsBackgorund = styled.section`
  background-image: url(${image});
  background-size: cover;
  height: 100vh;
`;

const styles = {
  DetailsBackgorund,
};

export default styles;
