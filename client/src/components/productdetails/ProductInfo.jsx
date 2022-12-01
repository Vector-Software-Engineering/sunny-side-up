import React from 'react';

const ProductInfo = ({ testProduct, testReviews, numReviews }) => {

  let goToReviews = () => {
    console.log('This link will send to Jakes Review Component');
  }

  return (
    <div>
      ProductInfo Component
      <div>
        <label><b>Star Rating </b></label>
        {testReviews}
        <a href="#" onClick={goToReviews}> Read all [{numReviews}] reviews</a>
      </div>
      <div>
        <label><b>Product Category </b></label>
        {testProduct.category}
      </div>
      <div>
        <label><b>Product Title </b></label>
        {testProduct.name}
      </div>
      <div>
        <label><b>Price </b></label>
        {testProduct.default_price}
      </div>
      <div>
        <label><b>Product Description </b></label>
        {testProduct.description}
      </div>
      <div>
        <label><b>Share on Social Media</b></label>
        <button type="button">Facebook</button>
        <button type="button">Twitter</button>
        <button type="button">Pinterest</button>
      </div>
    </div>
  );
};

export default ProductInfo;