import React from 'react';

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
        ? <div onClick={setIndexAndMain} type="button">◉</div>
        : <div onClick={setIndexAndMain} type="button">○</div>}
    </div>
  );
}

export default ExtendedViewDots;
