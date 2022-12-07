import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { StyledAddToCart } from './styles/AddToCart.styled.js';

const AddToCart = ({ currentStyle }) => {
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [styleSelected, setStyleSelected] = useState('');
  const [quantitySelected, setQuantitySelected] = useState(1);
  const [notSelected, setNotSelected] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const styleSelectedRef = useRef();

  let sizes = [];
  let quantity = [];
  if (currentStyle.skus !== undefined) {
    for (let keys in currentStyle.skus) {
      if (currentStyle.skus[keys].quantity > 0) {
        sizes.push({label: currentStyle.skus[keys].size, value: keys, quantity: currentStyle.skus[keys].quantity});
        quantity.push({label: currentStyle.skus[keys].quantity, value: keys});
      }
    }
  }

  // console.log('sizes are: ', sizes);
  // console.log('quantites are: ', quantity);

  const grabStyleID = (e) => {
    setStyleSelected(e.value);
    setNotSelected(false);
    console.log('e is this: ', e);
    let totalQuantity = currentStyle.skus[e.value].quantity;
    let newQuantityOptions = [...Array(Math.min(15, totalQuantity)).keys()];
    let finalQuantityOptions = [];
    for (let i = 1; i < newQuantityOptions.length+1; i++) {
      finalQuantityOptions.push({label: i, value: i})
    }
    setQuantityOptions(finalQuantityOptions);
  };

  const grabQuantity = (e) => {
    setQuantitySelected(e.value);
    console.log('grabbing the quantity: ', e);
  };

  const addProduct = (data) => {
    console.log('Selected: [product_id, style_id, quantity]', data);
  };

  const chooseSize = () => {
    setNotSelected(true);
    if (styleSelectedRef.current) {
      styleSelectedRef.current.focus();
    }
  };

  return (
    <StyledAddToCart>
      { notSelected ? <div>~Please Select Size~</div> : null}
      {sizes.length > 0 ? <Select options={sizes} ref={styleSelectedRef} onChange={(e) => grabStyleID(e)} placeholder={'Select Size'} openMenuOnFocus={true}/> : <Select placeholder="OUT OF STOCK" isDisabled={true}/>}
      {styleSelected !== '' ? <Select options={quantityOptions} onChange={(e) => grabQuantity(e)} defaultValue={1} placeholder={1}/> : <Select isDisabled={true} placeholder='-'/>}
      {sizes.length < 1
      ? null
      : styleSelected !== ''
      ? <button onClick={() => addProduct([currentStyle.style_id, styleSelected, quantitySelected])}>Add To Cart</button>
      : <button onClick={chooseSize}>Add To Cart</button>}
    </StyledAddToCart>
  );
};

//{sizes.length > 0 ? <Dropdown options={sizes} onChange={(e) => grabStyleID(e.value)} value='Select Size'/> : <div>OUT OF STOCK</div>}
//{sizes.length > 0 ? <Dropdown options={quantityOptions} value='-' /> : <Dropdown disabled options={quantity} value='-'/>}

export default AddToCart;