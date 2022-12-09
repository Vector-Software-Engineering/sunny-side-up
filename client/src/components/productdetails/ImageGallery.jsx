/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import { StyledImageGallery, StyledThumbnails, StyleLeftButton, StyleRightButton, StyledMainImage } from './styles/ImageGallery.styled.js';

function ImageGallery({
  currentProduct, currentStyle, mainImage, setMainImage,
  setCurrentIndex, currentIndex, goToExtendedView, firstIndex, setFirstIndex,
}) {
  const [shortenedThumbnails, setShortenedThumbnails] = useState([]);

  const setThumbnails = () => {
    console.log('the firstIndex is:, ', firstIndex);
    if (currentStyle && shortenedThumbnails.length === 0) {
      let tempArray = [];
      let counter = 0;
      for (let i = firstIndex; i < currentStyle.photos.length; i += 1) {
        if (counter > 6) {
          break;
        }
        tempArray.push(currentStyle.photos[i]);
        counter += 1;
      }
      counter = 0;
      setShortenedThumbnails(tempArray);
    }
  };
  setThumbnails();

  const leftButton = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const rightButton = () => {
    if (currentIndex !== currentStyle.photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex > 6) {
        setFirstIndex(7);
        setThumbnails();
      }
      console.log('inside rightButton the currentIndex is: ', currentIndex, firstIndex, shortenedThumbnails);
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
        {shortenedThumbnails.length !== 0
          ? shortenedThumbnails.map((photo, index) => {
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
}

export default ImageGallery;
