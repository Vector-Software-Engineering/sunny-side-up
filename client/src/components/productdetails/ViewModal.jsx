import React from 'react';
import {
  ModalContainer,
} from './styles/ViewModal.styled.js';

export default function ViewModal({
  mainImage, currentIndex, currentStyle, goToExtendedView,
}) {
  return (
    <ModalContainer onClick={goToExtendedView}>
      {mainImage === ''
        ? <img src={currentStyle.photos[0].thumbnail_url} alt="Main Product" />
        : <img src={mainImage.photos[currentIndex].thumbnail_url} alt="Main Product" />}
    </ModalContainer>
  );
}
