import React from 'react';
import CurrentStyleSelected from './CurrentStyleSelected.jsx';
import { StyledStyleSelector, StyledGrid, StyledStyle } from './styles/StyleSelector.styled.js';

function StyleSelector({
  allStyles, currentStyle, setCurrentStyle, setMainImage,
}) {
  return (
    <StyledStyleSelector>
      <StyledStyle>{currentStyle.name}</StyledStyle>
      <StyledGrid>
        {allStyles.map((product, index) => <CurrentStyleSelected className="item" key={product.style_id} index={index} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product} setMainImage={setMainImage} />)}
      </StyledGrid>
    </StyledStyleSelector>
  );
}

export default StyleSelector;
