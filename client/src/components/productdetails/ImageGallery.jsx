import React, { useState } from 'react';
import Image from './Image.jsx';

const ImageGallery = ({ currentProduct, currentStyle }) => {

  //console.log('ImageGallery: current product: ', currentProduct);
  //console.log('ImageGallery: currentStyle: ', currentStyle);

  return (
    <div>
      ImageGallery Component
      {currentStyle ? currentStyle.photos.map((photo, index) => {
        return <Image key={index} photo={photo}/>
      }) : null}
    </div>
  );
};

export default ImageGallery;