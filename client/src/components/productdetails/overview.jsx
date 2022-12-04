import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';

const Overview = ({ currentProduct, allReviews, numReviews, allStyles, currentStyle, setCurrentStyle }) => {

  return (
    <div>
      Overview Components
      <ProductInfo currentProduct={currentProduct} allReviews={allReviews} numReviews={numReviews}/>
      <StyleSelector allStyles={allStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
      <AddToCart currentStyle={currentStyle}/>
      <ImageGallery currentProduct={currentProduct} currentStyle={currentStyle} />
    </div>
  );
};

export default Overview;