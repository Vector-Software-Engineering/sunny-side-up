import React from 'react';

const CurrentStyleSelected = ({ currentStyle, product, setCurrentStyle }) => {

  const chooseStyle = (product) => {
    setCurrentStyle(product);
  }

  return (
    <div>
      <div>
        {currentStyle.style_id === product.style_id ? <div>✅</div> : null}
      </div>
      <img onClick={() => chooseStyle(product)} src={product.photos[0].thumbnail_url}/>
    </div>
  );
};

export default CurrentStyleSelected;
