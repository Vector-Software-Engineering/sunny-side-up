import React, { useState } from 'react';
import ExtendedViewDots from './ExtendedViewDots.jsx';
import {
  ModalContainer, ExtendedViewContainer, StyledLeftArrow, StyledRightArrow, StyledDots, StyledExit, StyledImgContainer, StyledExtendedImg, StyledMagnifier,
} from './styles/ViewModal.styled.js';

export default function ViewModal({
  mainImage, currentIndex, currentStyle, goToExtendedView, setCurrentIndex, setMainImage,
}) {
  const [showMagnify, setShowMagnify] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[width, height], setSize] = useState([0, 0]);

  const onRightClick = () => {
    if (currentIndex !== currentStyle.photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onLeftClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const mouseEnter = (e) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
  };

  const onImageClick = (e) => {
    console.log('Going to ZOOOOOOOOMY view');
    mouseEnter(e);
    setShowMagnify(!showMagnify);
    console.log('the width and the height', width, height);
    console.log('true if showing', showMagnify);
    console.log('this the mous x and y coordinate', x, y);
  };

  const mouseMove = (e) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setXY([x, y]);
  };

  return (
    <div>
      <ModalContainer>
        <ExtendedViewContainer>
          <StyledLeftArrow onClick={onLeftClick}>←</StyledLeftArrow>
          <StyledImgContainer>
            <StyledExtendedImg
              onMouseMove={(e) => mouseMove(e)}
              onClick={(e) => onImageClick(e)}
              src={currentStyle.photos[currentIndex].thumbnail_url}
              alt="Main Product"
            />
            <StyledMagnifier
              x={x}
              y={y}
              width={width}
              height={height}
              src={currentStyle.photos[currentIndex].thumbnail_url}
              showMagnify={showMagnify}
              onClick={onImageClick}
            />
          </StyledImgContainer>
          <StyledExit onClick={goToExtendedView}>❌</StyledExit>
          <StyledDots>
            {currentStyle ? currentStyle.photos.map((photo, index) => {
              return <ExtendedViewDots key={index} index={index} setCurrentIndex={setCurrentIndex} setMainImage={setMainImage} currentStyle={currentStyle} currentIndex={currentIndex} />
            }) : null}
          </StyledDots>
          <StyledRightArrow onClick={onRightClick}>→</StyledRightArrow>
        </ExtendedViewContainer>
      </ModalContainer>
    </div>
  );
}
