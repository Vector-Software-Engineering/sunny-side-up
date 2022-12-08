import styled from 'styled-components';

export const StyledImageGallery = styled.div`
  position: relative;
  top: 20px;
`;

export const StyledMainImage = styled.img`
  cursor: zoom-in;
  height: 100%;
  width: 100%;
`;

export const StyledThumbnails = styled.div`
  display: flex;
  position: relative;
  align-content: center;
  justify-content: space-around;
  left: -40px;
  top: -50px;
  background-color: green;
  cursor: default;
`;

export const StyleLeftButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
`;

export const StyleRightButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
`;
