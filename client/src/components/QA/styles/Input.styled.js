import styled from 'styled-components';

const Input = styled.input`
  transition: all 0.34s ease;
  justify-content: start;
  width: 35%;
  height: 5vh;
  font-size: 30px;
  margin: 0 0 10px 0;
  background-color: ${(props) => props.theme.inputColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.inputBorderColor};

  &: focus {
    border-style: 1px;
    border-color: blue;
  }
`;

export default Input;
