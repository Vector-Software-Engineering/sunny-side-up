import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import {
  StyledOverviewHeader, StyledSidebar, StyledOverview,
  MainImageBox, InformationBox, StyledFooter, StyledExtendedView,
} from './styles/Overview.styled.js';
import logo from './logo.jpg';

const Overview = ({ currentProduct, allReviews, numReviews, allStyles, currentStyle, setCurrentStyle }) => {
  const [mainImage, setMainImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [extendedView, setExtendedView] = useState('');

  const goToExtendedView = () => {
    console.log('we are going to extended view');
    setExtendedView('true');
  }

  return (
    <StyledOverview>
      {!currentStyle || extendedView === '' ? null : mainImage === '' ? <StyledExtendedView src={currentStyle.photos[0].thumbnail_url}/> : <StyledExtendedView  src={mainImage.photos[currentIndex].thumbnail_url}/>}
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
      <StyledSidebar />
      <article>
        <MainImageBox>
          <ImageGallery
            currentProduct={currentProduct}
            currentStyle={currentStyle}
            mainImage={mainImage}
            setMainImage={setMainImage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            goToExtendedView={goToExtendedView}
          />
        </MainImageBox>
        <InformationBox>
          <ProductInfo
            currentProduct={currentProduct}
            allReviews={allReviews}
            numReviews={numReviews}
            currentStyle={currentStyle}
          />
          <StyleSelector
            allStyles={allStyles}
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
            setMainImage={setMainImage}
          />
          <AddToCart currentStyle={currentStyle} />
        </InformationBox>
      </article>
      <StyledFooter />
    </StyledOverview>
  );
};

export default Overview;
