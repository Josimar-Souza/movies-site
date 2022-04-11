import styled from 'styled-components';

const LeftSideFadeStyle = styled.div`
  background: linear-gradient(to right, rgba(15, 15, 15, 1), 85%, rgba(15, 15, 15, 0));
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 30%;
`;

export default LeftSideFadeStyle;
