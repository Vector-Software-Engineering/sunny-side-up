import React from 'react';
import { ProductBreakdown } from './styles/ProductBreakdown.styled.js';
import './styles/styles.css';

export default function ({ characteristics }) {
  console.log('chards: ' + JSON.stringify(characteristics));
  return (
    <ProductBreakdown>
      {
        characteristics.Size !== undefined
          ? <p>{`size: ${characteristics.Size.value}`}</p>
          : null
      }
      {
        characteristics.Width !== undefined
          ? <p>{`width: ${characteristics.Width.value}`}</p>
          : null
      }
      {
        characteristics.Comfort !== undefined
          ? <p>{`comfort: ${characteristics.Comfort.value}`}</p>
          : null
      }
      {
        characteristics.Quality !== undefined
          ? <p>{`quality: ${characteristics.Quality.value}`}</p>
          : null
      }
      {
        characteristics.Length !== undefined
          ? <p>{`length: ${characteristics.Length.value}`}</p>
          : null
      }
      {
        characteristics.Fit !== undefined
          ? <p>{`fit: ${characteristics.Fit.value}`}</p>
          : null
      }
    </ProductBreakdown>
  );
}
