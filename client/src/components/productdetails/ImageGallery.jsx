import React, { useState } from 'react';
import Image from './Image.jsx';
import { StyledImageGallery } from './styles/ImageGallery.styled.js';

const ImageGallery = ({ currentProduct, currentStyle }) => {

  //console.log('ImageGallery: current product: ', currentProduct);
  //console.log('ImageGallery: currentStyle: ', currentStyle);

  return (
    <StyledImageGallery>
      ImageGallery Component
      {currentStyle ? currentStyle.photos.map((photo, index) => {
        return <Image key={index} photo={photo}/>
      }) : null}
    </StyledImageGallery>
  );
};

export default ImageGallery;