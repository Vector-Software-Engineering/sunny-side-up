import styled from 'styled-components';

const Input = styled.input`
  transition: width 4s ease-in-out;
  justify-content: start;
  width: 35%;
  height: 6vh;
  font-size: 20px;

  &: focus {
    border-style: 1px;
    border-color: blue;
  }
`;

export default Input;
