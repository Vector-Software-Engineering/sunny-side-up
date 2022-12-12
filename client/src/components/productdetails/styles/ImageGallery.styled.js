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
  width: 100%;
  cursor: default;
`;

export const StyleLeftButton = styled.button`
  border: none;
  font-size: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 10%;
  background-color: white;
  align-content: center;
`;

export const StyleRightButton = styled.button`
  border: none;
  font-size: 40px;
  top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 10%;
  background-color: white;
  align-content: center;
`;
