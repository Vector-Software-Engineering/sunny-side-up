import styled from 'styled-components';

const Input = styled.input`
  transition: width 4s ease-in-out;
  justify-content: start;
  width: 35%;
  height: 5vh;
  font-size: 30px;
  background-color: ${(props) => props.theme.inputColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.inputBorderColor};

  &: focus {
    border-style: 1px;
    border-color: blue;
  }
`;

export default Input;
