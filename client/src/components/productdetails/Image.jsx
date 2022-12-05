import React from 'react';
import { StyledImage } from './styles/Image.styled.js';

const Image = ({ photo }) => {

  //console.log('photo: ', photo);

  const doSomething = () => {
    console.log('hi');
  }

  return (
    <StyledImage>
      <div>
        <img onClick={doSomething} src={photo.thumbnail_url}/>
      </div>
    </StyledImage>
  );
};

export default Image;