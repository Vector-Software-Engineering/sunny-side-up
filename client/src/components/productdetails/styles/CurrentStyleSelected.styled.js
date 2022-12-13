import styled from 'styled-components';

export const StyledCurrentStyleSelected = styled.div`
  img {
    position: relative;
    padding: 5px;
    width: 50px;
  }
`;

export const StyledImgContainer = styled.div`
  height: 50px;
  width: 50px;
  padding-right: 100px;
  background-color: pink;
  overflow: hidden;
`;

export const CheckMarkOverlay = styled.div`
  position: relative;
  top: 40px;
  left: 47px;
  width: auto;
  z-index: 1;
  color: red;
`;
