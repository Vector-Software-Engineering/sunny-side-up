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
  position: absolute;
  align-content: center;
  top: 0px;
  left: -40px;
  flex-direction: column;
  cursor: default;
`;

export const StyleLeftButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 455px;
  right: 180px;
`;

export const StyleRightButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 455px;
  right: 120px;
`;
