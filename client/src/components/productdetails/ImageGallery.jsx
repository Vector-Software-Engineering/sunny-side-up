/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import {
  StyledImageGallery, StyledThumbnails, StyleLeftButton, StyleRightButton, StyledMainImage,
} from './styles/ImageGallery.styled.js';

function ImageGallery({
  currentProduct, currentStyle, mainImage, setMainImage,
  setCurrentIndex, currentIndex, goToExtendedView, firstIndex, setFirstIndex,
  shortenedThumbnails, setThumbnails, reset,
}) {
  const leftButton = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      if (currentIndex < 9) {
        setFirstIndex(0);
        setThumbnails();
        reset();
      }
      console.log('inside leftButton the currentIndex is: ', currentIndex, firstIndex, shortenedThumbnails);
    }
  };

  const rightButton = () => {
    if (currentIndex !== currentStyle.photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex > 4) {
        setFirstIndex(7);
        setThumbnails();
        reset();
      }
      console.log('inside rightButton the currentIndex is: ', currentIndex, firstIndex, shortenedThumbnails);
    }
  };

  useEffect(() => {
    reset();
  }, [shortenedThumbnails]);

  return (
    <StyledImageGallery>

      <StyledThumbnails>
        {!currentStyle
          ? <StyleLeftButton onClick={leftButton}> </StyleLeftButton>
          : currentIndex === 0 && firstIndex !== 7
            ? <StyleLeftButton onClick={leftButton}> </StyleLeftButton>
            : <StyleLeftButton onClick={leftButton}>←</StyleLeftButton>}
        {shortenedThumbnails
          // eslint-disable-next-line max-len
          ? shortenedThumbnails.map((photo, index) => <Image key={index} index={index + firstIndex} photo={photo} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} currentStyle={currentStyle} />)
          : currentStyle
            // eslint-disable-next-line max-len
            ? currentStyle.photos.map((photo, index) => {
              if (index < 7) {
                // eslint-disable-next-line max-len
                return <Image key={index} index={index} photo={photo} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} currentStyle={currentStyle} />;
              }
            })
            : null}
        {!currentStyle
          ? <StyleRightButton onClick={rightButton}> </StyleRightButton>
          : currentIndex === currentStyle.photos.length - 1
            ? <StyleRightButton onClick={rightButton}> </StyleRightButton>
            : <StyleRightButton onClick={rightButton}>→</StyleRightButton>}
      </StyledThumbnails>

      {!currentStyle
        ? null
        : <>
        <StyledMainImage onClick={goToExtendedView} src={currentStyle.photos[currentIndex].thumbnail_url} />
        </>}
    </StyledImageGallery>
  );
}

export default ImageGallery;
