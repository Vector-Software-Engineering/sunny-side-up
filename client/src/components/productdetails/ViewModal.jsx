import React from 'react';
import {
  ModalContainer,
} from './styles/ViewModal.styled.js';

export default function ViewModal({
  mainImage, currentIndex, currentStyle, goToExtendedView,
}) {
  return (
    <div>
      <ModalContainer>
        {mainImage === ''
          ? <>
            <img src={currentStyle.photos[0].thumbnail_url} alt="Main Product" />
            <button onClick={goToExtendedView} >❌</button>
          </>
          : <img src={mainImage.photos[currentIndex].thumbnail_url} alt="Main Product" />}
      </ModalContainer>

    </div>
  );
}
