import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import {
  StyledOverviewHeader, StyledSidebar, StyledOverview, GridContainer,
  MainImageBox, InformationBox, StyledProductInfo,
} from './styles/Overview.styled.js';
import ViewModal from './ViewModal.jsx';

function Overview({
  currentProduct, allReviews, numReviews, allStyles, currentStyle, setCurrentStyle
}) {
  const [mainImage, setMainImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [extendedView, setExtendedView] = useState(false);
  const [shortenedThumbnails, setShortenedThumbnails] = useState(undefined);
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };

  const goToExtendedView = () => {
    console.log('we are going to extended view');
    setExtendedView(!extendedView);
  };

  const setThumbnails = () => {
    console.log('the firstIndex is:, ', firstIndex);
    // eslint-disable-next-line max-len
    if (currentStyle && (shortenedThumbnails !== undefined || firstIndex === 7 || firstIndex === 0)) {
      const tempArray = [];
      let counter = 0;
      for (let i = firstIndex; i < currentStyle.photos.length; i += 1) {
        if (counter > 6) {
          break;
        }
        tempArray.push(currentStyle.photos[i]);
        counter += 1;
      }
      counter = 0;
      setShortenedThumbnails(tempArray);
    }
    reset();
  };

  return (
    <StyledOverview>
      {!currentStyle || extendedView === false
        ? null : mainImage === ''
          ? <ViewModal currentStyle={currentStyle} mainImage={mainImage} currentIndex={currentIndex} goToExtendedView={goToExtendedView} />
          : <ViewModal currentStyle={currentStyle} mainImage={mainImage} currentIndex={currentIndex} goToExtendedView={goToExtendedView} />}
      <StyledOverviewHeader>
        <hgroup>
          <h1>Sunny Side Up</h1>
          <time>
            <b>12/04/2022 07:46pm </b>
            <span>Philadelphia</span>
          </time>
        </hgroup>
      </StyledOverviewHeader>
      <StyledSidebar />
      <GridContainer>
        <MainImageBox>
          <ImageGallery
            currentProduct={currentProduct}
            currentStyle={currentStyle}
            mainImage={mainImage}
            setMainImage={setMainImage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            goToExtendedView={goToExtendedView}
            firstIndex={firstIndex}
            setFirstIndex={setFirstIndex}
            shortenedThumbnails={shortenedThumbnails}
            setThumbnails={setThumbnails}
          />
        </MainImageBox>
        <StyledProductInfo>
          <ProductInfo
            currentProduct={currentProduct}
            allReviews={allReviews}
            numReviews={numReviews}
            currentStyle={currentStyle}
          />
          <InformationBox>
            <StyleSelector
              allStyles={allStyles}
              currentStyle={currentStyle}
              setCurrentStyle={setCurrentStyle}
              setMainImage={setMainImage}
              setThumbnails={setThumbnails}
            />
            <AddToCart currentStyle={currentStyle} />
          </InformationBox>
        </StyledProductInfo>

      </GridContainer>
    </StyledOverview>
  );
}

export default Overview;
