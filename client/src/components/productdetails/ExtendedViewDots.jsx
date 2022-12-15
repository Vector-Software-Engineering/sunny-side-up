import React from 'react';
import { StyledDots } from './styles/ExtendedViewDots.styled.js';

function ExtendedViewDots({
  index, currentStyle, setMainImage, setCurrentIndex, currentIndex,
}) {
  const setIndexAndMain = () => {
    console.log('currentStyle', currentStyle);
    console.log('index', index);
    setMainImage(currentStyle);
    setCurrentIndex(index);
  };

  return (
    <div>
      {index === currentIndex
        ? <StyledDots onClick={setIndexAndMain} type="button">◉</StyledDots>
        : <StyledDots onClick={setIndexAndMain} type="button">○</StyledDots>}
    </div>
  );
}

export default ExtendedViewDots;
