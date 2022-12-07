import styled from 'styled-components';

export const StyledImageGallery = styled.div`
  position: relative;
  top: 20px;
`;

export const StyledMainImage = styled.img`
  cursor: zoom-in;
`;

export const StyledThumbnails = styled.div`
  display: flex;
  position: relative;
  align-content: center;
  top: -80px;
  justify-content: space-around;
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
