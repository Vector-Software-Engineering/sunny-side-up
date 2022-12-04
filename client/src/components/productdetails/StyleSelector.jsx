import React, { useState } from 'react';
import CurrentStyleSelected from './CurrentStyleSelected.jsx';
import { StyledStyleSelector } from './styles/StyleSelector.styled.js'

const StyleSelector = ({ allStyles, currentStyle, setCurrentStyle }) => {

  return (
    <StyledStyleSelector>
      StyleSelector Component
      <div>
        Current Style is : {currentStyle.name}
      </div>
      <span>
        {allStyles.map((product, index) => {
          return <CurrentStyleSelected key={index} index={index} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product}/>
        })}
      </span>
    </StyledStyleSelector>
  );
};

export default StyleSelector;