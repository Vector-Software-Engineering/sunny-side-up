import React from 'react';
import { StyledImage } from './styles/Image.styled.js';

const Image = ({ photo, setMainImage, index, setCurrentIndex, currentStyle }) => {
  const setIndexAndMain = () => {
    setMainImage(currentStyle);
    setCurrentIndex(index);
  };

  return (
    <StyledImage>
      <div>
        <img onClick={() => setIndexAndMain(photo, index)} src={photo.thumbnail_url} alt="style" />
      </div>
    </StyledImage>
  );
};

export default Image;
