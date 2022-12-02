import React from 'react';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share";
import { FacebookIcon, PinterestIcon, TwitterIcon } from "react-share";

const ProductInfo = ({ currentProduct, allReviews, numReviews }) => {

  let goToReviews = () => {
    console.log('This link will change View to James Review Component');
  }

  return (
    <div>
      <div>
        <label><b>Star Rating </b></label>
        {allReviews}
        <a href="#" onClick={goToReviews}> Read all [{numReviews}] reviews</a>
      </div>
      <div>
        <label><b>Product Category </b></label>
        {currentProduct.category}
      </div>
      <div>
        <label><b>Product Title </b></label>
        {currentProduct.name}
      </div>
      <div>
        <label><b>Price </b></label>
        {currentProduct.default_price}
      </div>
      <div>
        <label><b>Product Description </b></label>
        {currentProduct.description}
      </div>
      <div>
        <label><b>Share on Social Media</b></label>
        <div>
          <FacebookShareButton url={'https://www.supremenewyork.com/'}>
            <FacebookIcon size={20}/>
          </FacebookShareButton>
        </div>
        <div>
          <PinterestShareButton url={'https://www.supremenewyork.com/'} media={'https://en.wikipedia.org/wiki/Instagram_egg#/media/File:Instagram_egg.jpg'}>
            <PinterestIcon size={20}/>
          </PinterestShareButton>
        </div>
        <div>
          <TwitterShareButton url={'https://www.supremenewyork.com/'}>
            <TwitterIcon size={20}/>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;