import React, { useState } from 'react';
import CurrentStyleSelected from './CurrentStyleSelected.jsx';

const StyleSelector = ({ allStyles, currentStyle, setCurrentStyle }) => {

  //console.log('allstyles is: ', allStyles);

  return (
    <div>
      StyleSelector Component
      <div>
        Current Style is : {currentStyle.name}
      </div>
      {allStyles.map((product, index) => {
        return <CurrentStyleSelected key={index} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product}/>
      })}
    </div>
  );
};

export default StyleSelector;