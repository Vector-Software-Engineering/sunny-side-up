import React from 'react';
import './styles/styles.css';
import { allProductsWithThumbnails } from '../../testData/testData.js';

function HomePage({ products, setCurrentProduct, setTab }) {
  console.log('this is allProducts', allProductsWithThumbnails);

  const onClickHandler = (product) => {
    setCurrentProduct(product);
    setTab('detail');
  };
  return (
    <div className="container">
      <div className="products">
        {
          allProductsWithThumbnails && allProductsWithThumbnails.map((product) => <img class='selector-img' src={product.url} alt="" onClick={() => {onClickHandler(product)}} />)
        }
      </div>
    </div>
  );
}

export default HomePage;
