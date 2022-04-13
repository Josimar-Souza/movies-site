import styled from 'styled-components';
import getImageURL from '../../utils/getImageURL';

const getBackground = (props) => {
  if (props.image == null) {
    return 'background: #0f0f0f;';
  }

  return `background-image: url(${getImageURL(props.image)});`;
};

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
};

export default styles;
