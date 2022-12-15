import styled from 'styled-components';

const StyledImage = styled.div`
  img {
    padding: 1px;
    height: 50px;
    width: 50px;
  }

  button {
    all: revert;
  }
`;

const StyledSelectedImage = styled.img`
  border: 1px;
  border-color: black;
  border-style: ridge;
`;

export {
  StyledImage,
  StyledSelectedImage,
};
