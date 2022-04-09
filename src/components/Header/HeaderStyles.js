import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const HeaderStyle = styled.div`
  background: #303030;
  border-radius: 15px;
  box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-around;
  padding: 15px;
  width: 60%;
`;

const styles = {
  HeaderContainer,
  HeaderStyle,
};

export default styles;
