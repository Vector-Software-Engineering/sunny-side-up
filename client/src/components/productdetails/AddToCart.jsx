import React from 'react';
import Dropdown from 'react-dropdown';

const AddToCart = ({ currentStyle }) => {

  console.log('current style inside of addToCart', currentStyle);
  let sizes = [];
  if (currentStyle.skus !== undefined) {
    for (let keys in currentStyle.skus) {
      console.log(keys, currentStyle.skus[keys].size);
      sizes.push(currentStyle.skus[keys].size);
    }
  }

  console.log('sizes are: ', sizes);

  const options = [
    'one', 'two', 'three'
  ];
  // const defaultOption = options[0];
  // <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
  //<Dropdown sizes={sizes} value={sizes[0]} placeholder='select an option'/>
  return (
    <div>
      AddToCart Component
      <Dropdown options={sizes} value='Select Size' placeholder='select an option'/>
    </div>
  );
};

export default AddToCart;
