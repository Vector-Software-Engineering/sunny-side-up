import React, { useState } from 'react';
import CurrentStyleSelected from './CurrentStyleSelected.jsx';
import { StyledStyleSelector, StyledGrid, StyledStyle } from './styles/StyleSelector.styled.js';

const StyleSelector = ({
  allStyles, currentStyle, setCurrentStyle, setMainImage,
}) => {
  return (
    <StyledStyleSelector>
      <StyledStyle>{currentStyle.name}</StyledStyle>
      <StyledGrid>
        {allStyles.map((product, index) => {
          return <CurrentStyleSelected className='item' key={index} index={index} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product} setMainImage={setMainImage}/>
        })}
      </StyledGrid>
    </StyledStyleSelector>
  );
};

export default StyleSelector;
