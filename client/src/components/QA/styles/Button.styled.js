import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  background-color: white;
  color: black;
  width: fit-content;
  margin-top: 10px;


  &: hover {
    opacity: 0.9;
    transform: scale(0.98);
    background-color: #cfb32b
  }
`;
