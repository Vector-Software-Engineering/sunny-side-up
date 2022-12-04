import React from 'react';

const Image = ({ photo }) => {

  //console.log('photo: ', photo);

  const doSomething = () => {
    console.log('hi');
  }

  return (
    <div>
      <img onClick={doSomething} src={photo.thumbnail_url}/>
    </div>
  );
};

export default Image;