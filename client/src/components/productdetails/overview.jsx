import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';

const Overview = ({ testProduct, testReviews, numReviews }) => {

  console.log('this is test Product: ', testProduct);
  console.log('this is test Reviews: ', testReviews);
  console.log('this is numReviews: ', numReviews);

  return (
    <div>
      Overview Components
      <ProductInfo testProduct={testProduct} testReviews={testReviews} numReviews={numReviews}/>
      <StyleSelector />
      <AddToCart />
      <ImageGallery />
    </div>
  );
};

export default Overview;