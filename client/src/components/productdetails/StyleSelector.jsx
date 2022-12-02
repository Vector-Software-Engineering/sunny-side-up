import React, { useState } from 'react';

const StyleSelector = ({ allStyles, currentStyle, setCurrentStyle }) => {

  const chooseStyle = (productId) => {
    console.log('chooseStyle function clicked');

  }

  return (
    <div>
      StyleSelector Component
      {allStyles.map((product, index) => {
        return <img style_id={product.style_id} onClick={chooseStyle} key={index} src={product.photos[index].thumbnail_url} size={30}/>
      })}
    </div>
  );
};

export default StyleSelector;