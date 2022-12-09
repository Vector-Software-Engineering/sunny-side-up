import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import {
  StyledOverviewHeader, StyledSidebar, StyledOverview,
  MainImageBox, InformationBox, StyledFooter, StyledExtendedView,
} from './styles/Overview.styled.js';
// import logo from './logo.jpg';

const Overview = ({ currentProduct, allReviews, numReviews, allStyles, currentStyle, setCurrentStyle }) => {


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
  const [extendedView, setExtendedView] = useState('');
  const [date, setDate] = useState(new Date().toLocaleString("en-US", dateoptions))
  const [time, setTime] = useState(new Date().toLocaleString("en-US", timeoptions))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US", timeoptions));
      setDate(new Date().toLocaleString("en-US", dateoptions));
    }, 20000);
    return () => clearInterval(interval);
  }, []);


  const goToExtendedView = () => {
    console.log('we are going to extended view');
    setExtendedView('true');
  };

  return (
    <StyledOverview>
      {!currentStyle || extendedView === '' ? null : mainImage === '' ? <StyledExtendedView src={currentStyle.photos[0].thumbnail_url}/> : <StyledExtendedView  src={mainImage.photos[currentIndex].thumbnail_url}/>}
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
