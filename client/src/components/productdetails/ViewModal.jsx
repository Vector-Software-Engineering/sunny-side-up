import React from 'react';
import ExtendedViewDots from './ExtendedViewDots.jsx';
import {
  ModalContainer, ExtendedViewContainer, StyledLeftArrow, StyledRightArrow, StyledDots, StyledExit, StyledImgContainer, StyledExtendedImg,
} from './styles/ViewModal.styled.js';

export default function ViewModal({
  mainImage, currentIndex, currentStyle, goToExtendedView, setCurrentIndex, setMainImage,
}) {
  const onRightClick = () => {
    if (currentIndex !== currentStyle.photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const onLeftClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div>
      <ModalContainer>
        <ExtendedViewContainer>
          <StyledLeftArrow onClick={onLeftClick}>←</StyledLeftArrow>
          <StyledImgContainer>
            <StyledExtendedImg src={currentStyle.photos[currentIndex].thumbnail_url} alt="Main Product" />
            <StyledExit onClick={goToExtendedView}>❌</StyledExit>
          </StyledImgContainer>
          <StyledDots>
            {currentStyle ? currentStyle.photos.map((photo, index) => {
              return <div><ExtendedViewDots key={index} index={index} setCurrentIndex={setCurrentIndex} setMainImage={setMainImage} currentStyle={currentStyle} currentIndex ={currentIndex} /></div>
            }) : null}
          </StyledDots>
          <StyledRightArrow onClick={onRightClick}>→</StyledRightArrow>
        </ExtendedViewContainer>
      </ModalContainer>
    </div>
  );
}
