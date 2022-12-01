import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';

const Overview = () => {
  return (
    <div>
      Overview Component
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
      <ImageGallery />
    </div>
  );
};

export default Overview;