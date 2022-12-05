import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import { StyledOverviewHeader } from './styles/Overview.styled.js';
import logo from './logo.jpg';

const Overview = ({ currentProduct, allReviews, numReviews, allStyles, currentStyle, setCurrentStyle }) => {

  return (
    <div>
      <StyledOverviewHeader>
        <hgroup>
          <img src={logo}/>
          <h1>Sunny Side Up</h1>
          <time>
            <b>12/04/2022 07:46pm </b>
            <span>Philadelphia</span>
          </time>
        </hgroup>
      </StyledOverviewHeader>
      Overview Components
      <ProductInfo currentProduct={currentProduct} allReviews={allReviews} numReviews={numReviews}/>
      <StyleSelector allStyles={allStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
      <AddToCart currentStyle={currentStyle}/>
      <ImageGallery currentProduct={currentProduct} currentStyle={currentStyle}/>
    </div>
  );
};

export default Overview;