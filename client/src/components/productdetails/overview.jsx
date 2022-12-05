import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import { StyledOverviewHeader, StyledSidebar, StyledOverview, MainImageBox, InformationBox } from './styles/Overview.styled.js';
import logo from './logo.jpg';

const Overview = ({ currentProduct, allReviews, numReviews, allStyles, currentStyle, setCurrentStyle }) => {

  return (
    <StyledOverview>
      <StyledOverviewHeader>
        <hgroup>
          <img src={logo} height={70}/>
          <h1>Sunny Side Up</h1>
          <time>
            <b>12/04/2022 07:46pm </b>
            <span>Philadelphia</span>
          </time>
        </hgroup>
      </StyledOverviewHeader>
      <StyledSidebar>
      </StyledSidebar>
      <article>
        <MainImageBox>
          <ImageGallery currentProduct={currentProduct} currentStyle={currentStyle}/>
        </MainImageBox>
        <InformationBox>
          <ProductInfo currentProduct={currentProduct} allReviews={allReviews} numReviews={numReviews}/>
          <StyleSelector allStyles={allStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
          <AddToCart currentStyle={currentStyle}/>
        </InformationBox>
      </article>
    </StyledOverview>
  );
};

export default Overview;