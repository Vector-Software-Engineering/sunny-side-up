import React from 'react';
import { StyledCurrentStyleSelected, CheckMarkOverlay } from './styles/CurrentStyleSelected.styled.js'

const CurrentStyleSelected = ({ currentStyle, product, index, setCurrentStyle, setMainImage }) => {

  const chooseStyle = (product) => {
    setMainImage(product);
    setCurrentStyle(product);
  }

  return (
    <StyledCurrentStyleSelected>
      <CheckMarkOverlay>
        {currentStyle.style_id === product.style_id ? <div>✅</div> : null}
      </CheckMarkOverlay>
      <div>
        <img onClick={() => chooseStyle(product)} src={product.photos[0].thumbnail_url}/>
      </div>
    </StyledCurrentStyleSelected>
  );
};

export default CurrentStyleSelected;
