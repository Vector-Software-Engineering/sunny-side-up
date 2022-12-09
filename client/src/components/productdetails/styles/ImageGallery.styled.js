import styled from 'styled-components';

export const StyledImageGallery = styled.div`
  display: relative;
  justify-content: center;
  align-content: center;
`;

export const StyledMainImage = styled.img`
  cursor: zoom-in;
  height: 100%;
  width: 100%;
`;

export const StyledThumbnails = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  left: auto;
  background-color: green;
  width: 100%;
  cursor: default;
`;

export const StyleLeftButton = styled.button`
  border: none;
  background-color: blue;
  font-size: 20px;
  cursor: pointer;
  display: absolute;
`;

export const StyleRightButton = styled.button`
  border: none;
  background-color: blue;
  font-size: 20px;
  cursor: pointer;
  display: relative;
`;
