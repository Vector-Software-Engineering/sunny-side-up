import axios from 'axios';
import React, { useState } from 'react';
import { ProductBreakdown } from './styles/ProductBreakdown.styled.js';
import './styles/styles.css';

export default function ({ prodID }) {
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);

  axios.get(`/api/reviews/meta/?product_id=${prodID}`)
    .then((response) => {
      console.log(response.data);
      if (response.data.characteristics.Size) {
        setSize(response.data.characteristics.Size.value);
      }
      if (response.data.characteristics.Width) {
        setWidth(response.data.characteristics.Width.value);
      }
      if (response.data.characteristics.Comfort) {
        setComfort(response.data.characteristics.Comfort.value);
      }
      if (response.data.characteristics.Quality) {
        setQuality(response.data.characteristics.Quality.value);
      }
      if (response.data.characteristics.Length) {
        setLength(response.data.characteristics.Length.value);
      }
      if (response.data.characteristics.Fit) {
        setFit(response.data.characteristics.Fit.value);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <ProductBreakdown>
      {
        size > 0
          ? <p>{`size: ${size}`}</p>
          : null
      }
      {
        width > 0
          ? <p>{`width: ${width}`}</p>
          : null
      }
      {
        comfort > 0
          ? <p>{`comfort: ${comfort}`}</p>
          : null
      }
      {
        quality > 0
          ? <p>{`quality: ${quality}`}</p>
          : null
      }
      {
        length > 0
          ? <p>{`length: ${length}`}</p>
          : null
      }
      {
        fit > 0
          ? <p>{`fit: ${fit}`}</p>
          : null
      }
    </ProductBreakdown>
  );
}
