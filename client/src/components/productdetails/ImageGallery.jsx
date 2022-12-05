import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import { StyledImageGallery, StyledThumbnails } from './styles/ImageGallery.styled.js';

const ImageGallery = ({ currentProduct, currentStyle, mainImage, setMainImage, setCurrentIndex, currentIndex }) => {

  return (
    <StyledImageGallery>
      {!currentStyle ? null : mainImage === '' ? <img src={currentStyle.photos[0].thumbnail_url}/> : <img src={mainImage.photos[currentIndex].thumbnail_url}/>}
      <StyledThumbnails>
        {currentStyle ? currentStyle.photos.map((photo, index) => {
          return <Image key={index} index={index} photo={photo} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} currentStyle={currentStyle}/>
        }) : null}
      </StyledThumbnails>
    </StyledImageGallery>
  );
};

//{currentStyle ? currentStyle.photos.map((photo, index) => {
//   return <Image key={index} photo={photo}/>
// }) : null}

export default ImageGallery;