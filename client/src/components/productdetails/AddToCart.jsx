import React, { useState } from 'react';
import Select from 'react-select';

const AddToCart = ({ currentStyle }) => {

  const [quantityOptions, setQuantityOptions] = useState([]);

  //console.log('current style inside of addToCart', currentStyle);
  let sizes = [];
  let quantity = [];
  if (currentStyle.skus !== undefined) {
    for (let keys in currentStyle.skus) {
      if (currentStyle.skus[keys].quantity > 0) {
        sizes.push({label: currentStyle.skus[keys].size, value: keys, quantity: currentStyle.skus[keys].quantity});
      }
    }
  }

  //console.log('sizes are: ', sizes);
  //console.log('quantites are: ', quantity);

  const grabStyleID = (styleId) => {
    //console.log('grabStyleId on change', styleId);
    let totalQuantity = currentStyle.skus[styleId].quantity;
    let newQuantityOptions = [...Array(Math.min(15, totalQuantity)).keys()];
    let finalQuantityOptions = newQuantityOptions.map(x => x + 1);
    //console.log('newQuantityOptions is: ', finalQuantityOptions);
    setQuantityOptions(finalQuantityOptions);
    //console.log('quantity options after setting new vals: ', quantityOptions)
  };

  return (
    <div>
      AddToCart Component
      {sizes.length > 0 ? <Select options={sizes} onChange={(e) => grabStyleID(e.value)} placeholder={'Select Size'}/> : <div>OUT OF STOCK</div>}
      {sizes.length > 0 ? <Select options={sizes} placeholder='-' /> : <Select disabled options={quantityOptions} value='-'/>}
    </div>
  );
};

//{sizes.length > 0 ? <Dropdown options={sizes} onChange={(e) => grabStyleID(e.value)} value='Select Size'/> : <div>OUT OF STOCK</div>}
//{sizes.length > 0 ? <Dropdown options={quantityOptions} value='-' /> : <Dropdown disabled options={quantity} value='-'/>}

export default AddToCart;