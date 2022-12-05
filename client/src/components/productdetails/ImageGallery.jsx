import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import { StyledImageGallery, StyledThumbnails } from './styles/ImageGallery.styled.js';

const ImageGallery = ({ currentProduct, currentStyle }) => {

  const [mainImage, setMainImage] = useState();

  //console.log('ImageGallery: current product: ', currentProduct);
  console.log('ImageGallery: currentStyle: ', currentStyle);

  // useEffect(() => {
  //   setMainImage(currentStyle.photos[0]);
  // }, []);

  return (
    <StyledImageGallery>
      {currentStyle ? <img src={currentStyle.photos[0].thumbnail_url}/> : null}
      <StyledThumbnails>
        {currentStyle ? currentStyle.photos.map((photo, index) => {
          return <Image key={index} photo={photo}/>
        }) : null}
      </StyledThumbnails>
    </StyledImageGallery>
  );
};

//{currentStyle ? currentStyle.photos.map((photo, index) => {
//   return <Image key={index} photo={photo}/>
// }) : null}

export default ImageGallery;