import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import {
  StyledOverviewHeader, StyledSidebar, StyledOverview, GridContainer,
  MainImageBox, InformationBox, StyledProductInfo, StyledWrappedGrid,
} from './styles/Overview.styled.js';
import ViewModal from './ViewModal.jsx';

function Overview({
  currentProduct, allReviews, numReviews, allStyles, currentStyle, setCurrentStyle, reviews,
}) {
  const timeoptions = {
    timeZone: "EST",
    hour: "2-digit",
    minute: "2-digit"
  }
  const dateoptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const [mainImage, setMainImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [extendedView, setExtendedView] = useState(false);
  const [shortenedThumbnails, setShortenedThumbnails] = useState(undefined);
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  const [date, setDate] = useState(new Date().toLocaleString("en-US", dateoptions));
  const [time, setTime] = useState(new Date().toLocaleString("en-US", timeoptions));

  const goToExtendedView = () => {
    console.log('we are going to extended view');
    setExtendedView(!extendedView);
  };

  const setThumbnails = () => {
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
  };

  useEffect(() => {
    setThumbnails();
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US", timeoptions));
      setDate(new Date().toLocaleString("en-US", dateoptions));
    }, 20000);
    return () => clearInterval(interval);
  }, [currentStyle]);

  return (
    <StyledOverview>
      {!currentStyle || extendedView === false
        ? null : mainImage === ''
          ? <ViewModal currentStyle={currentStyle} mainImage={mainImage} currentIndex={currentIndex} goToExtendedView={goToExtendedView} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} />
          : <ViewModal currentStyle={currentStyle} mainImage={mainImage} currentIndex={currentIndex} goToExtendedView={goToExtendedView} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} />}
      <StyledOverviewHeader>
        <hgroup style={{display: 'flex', justifyContent: 'center'}}>
        <img src="https://i.ibb.co/6YwX274/eggwithname.png" alt="eggwithname" border="0" />
        </hgroup>
        <hgroup style={{display: 'flex', justifyContent: 'center'}}>
          <time>
            <p>{date} {time} PHI</p>
          </time>
        </hgroup>
      </StyledOverviewHeader>
      <StyledSidebar />
      <StyledWrappedGrid>
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
              reset={reset}
            />
          </MainImageBox>
          <StyledProductInfo>
            <ProductInfo
              currentProduct={currentProduct}
              allReviews={allReviews}
              numReviews={numReviews}
              currentStyle={currentStyle}
              reviews={reviews}
            />
            <InformationBox>
              <StyleSelector
                allStyles={allStyles}
                currentStyle={currentStyle}
                setCurrentStyle={setCurrentStyle}
                setMainImage={setMainImage}
                setThumbnails={setThumbnails}
                reset={reset}
              />
              <AddToCart currentStyle={currentStyle} />
            </InformationBox>
          </StyledProductInfo>
        </GridContainer>
      </StyledWrappedGrid>
    </StyledOverview>
  );
}

export default Overview;
