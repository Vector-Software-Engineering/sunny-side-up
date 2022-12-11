import React from 'react';
import ExtendedViewDots from './ExtendedViewDots.jsx';
import {
  ModalContainer, ExtendedViewContainer,
} from './styles/ViewModal.styled.js';

export default function ViewModal({
  mainImage, currentIndex, currentStyle, goToExtendedView, setCurrentIndex, setMainImage,
}) {
  const onRightClick = () => {
    if (currentIndex !== currentStyle.photos.length) {
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
          <>
            <div onClick={onLeftClick}>←</div>
            <img src={currentStyle.photos[currentIndex].thumbnail_url} alt="Main Product" />
            <button onClick={goToExtendedView} >❌</button>
            {currentStyle ? currentStyle.photos.map((photo, index) => {
              return <div><ExtendedViewDots key={index} index={index} setCurrentIndex={setCurrentIndex} setMainImage={setMainImage} currentStyle={currentStyle} currentIndex ={currentIndex} /></div>
            }) : null}
            <div onClick={onRightClick}>→</div>
          </>
        </ExtendedViewContainer>
      </ModalContainer>
    </div>
  );
}
