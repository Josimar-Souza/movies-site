import styled from 'styled-components';

const Items = styled.div`
  display: flex;
  height: fit-content;
  margin-top: 15px;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 15px;
    background: #1e1e1e;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: black;
  }
`;

const ItemsSectionStyle = styled.div`
  background: #0f0f0f;
  color: white;
  padding 25px 0 25px 15px;
  width: 100%;
`;

const styles = {
  Items,
  ItemsSectionStyle,
};

export default styles;
