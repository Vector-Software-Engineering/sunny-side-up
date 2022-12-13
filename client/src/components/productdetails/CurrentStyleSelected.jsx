import React from 'react';
import { StyledCurrentStyleSelected, CheckMarkOverlay, StyledImgContainer } from './styles/CurrentStyleSelected.styled.js';

function CurrentStyleSelected({
  currentStyle, product, setCurrentStyle, setMainImage, setThumbnails, reset,
}) {
  const chooseStyle = () => {
    setMainImage(product);
    setCurrentStyle(product);
    // setThumbnails();
    reset();
  };

  return (
    <StyledCurrentStyleSelected>
      <CheckMarkOverlay>
        {currentStyle.style_id === product.style_id ? <div>✓</div> : null}
      </CheckMarkOverlay>
      <StyledImgContainer>
        <img onClick={() => chooseStyle(product)} src={product.photos[0].thumbnail_url}/>
      </StyledImgContainer>
    </StyledCurrentStyleSelected>
  );
}

export default CurrentStyleSelected;
