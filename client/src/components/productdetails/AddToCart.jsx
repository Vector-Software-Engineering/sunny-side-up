import React, { useState } from 'react';
import Dropdown from 'react-dropdown';

const AddToCart = ({ currentStyle }) => {

  const [quantityOptions, setQuantityOptions] = useState([]);

  //console.log('current style inside of addToCart', currentStyle);
  let sizes = [];
  let quantity = [];
  if (currentStyle.skus !== undefined) {
    for (let keys in currentStyle.skus) {
      console.log(keys, currentStyle.skus[keys].size);
      if (currentStyle.skus[keys].quantity > 0) {
        sizes.push({label: currentStyle.skus[keys].size, value: keys, quantity: currentStyle.skus[keys].quantity});
        quantity.push({label: currentStyle.skus[keys].quantity, value: keys})
      }
    }
  }

  // console.log('sizes are: ', sizes);
  // console.log('sizes are: ', quantity);

  const grabStyleID = (styleId) => {
    console.log('grabStyleId on change', styleId);
    let totalQuantity = currentStyle.skus[styleId].quantity;
    let newQuantityOptions = [...Array(Math.min(15, totalQuantity)).keys()];
    //console.log('newQuantityOptions is: ', newQuantityOptions);
    setQuantityOptions(newQuantityOptions);
  };

  return (
    <div>
      AddToCart Component
      {sizes.length > 0 ? <Dropdown options={sizes} onChange={(e) => grabStyleID(e.value)} value='Select Size'/> : <div>OUT OF STOCK</div>}
      {sizes.length > 0 ? <Dropdown options={quantityOptions} value='-' /> : <Dropdown disabled options={quantity} value='-'/>}
    </div>
  );
};

export default AddToCart;