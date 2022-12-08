/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import { StyledImageGallery, StyledThumbnails, StyleLeftButton, StyleRightButton, StyledMainImage } from './styles/ImageGallery.styled.js';

const ImageGallery = ({
  currentProduct, currentStyle, mainImage, setMainImage,
  setCurrentIndex, currentIndex, goToExtendedView,
}) => {
  const [shortenedThumbnails, setShortenedThumbnails] = useState([]);

  if (currentStyle && shortenedThumbnails === []) {
    let tempArray = [];
    for (let i = 0; i < 7; i += 1) {
      tempArray.push(currentStyle.photos[i]);
    }
    setShortenedThumbnails(tempArray);
  }

  const leftButton = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const rightButton = () => {
    if (currentIndex !== currentStyle.photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <StyledImageGallery>
      {!currentStyle
        ? null
        : mainImage === ''
        ? <StyledMainImage onClick={goToExtendedView} src={currentStyle.photos[0].thumbnail_url} />
        : <StyledMainImage onClick={goToExtendedView} src={mainImage.photos[currentIndex].thumbnail_url} />}
        {currentIndex === 0
        ? null
        : <StyleLeftButton onClick={leftButton}> ⬅️ </StyleLeftButton
      >}
      <StyledThumbnails>
        {currentStyle
          ? currentStyle.photos.map((photo, index) => {
            return <Image key={index} index={index} photo={photo} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} currentStyle={currentStyle} />
          }) : null}
      </StyledThumbnails>
      {!currentStyle
        ? null
        : currentIndex === currentStyle.photos.length - 1
          ? null
          : <StyleRightButton onClick={rightButton}>➡️</StyleRightButton>}
    </StyledImageGallery>
  );
};

export default ImageGallery;
