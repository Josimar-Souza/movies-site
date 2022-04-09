import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 700;
  height: 52px;
  margin: 15px auto;
  transition: 0.2s;
  width: 52%;

  &:hover {
    color: white;
    background: red;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9, 0.9);
  }
`;

export default ButtonStyle;
