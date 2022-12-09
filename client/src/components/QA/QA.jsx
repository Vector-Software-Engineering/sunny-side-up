import React from 'react';
import Listview from './Listview.jsx';
import { Container } from './styles/Container.styled.js';

export default function QA({ currentProduct }) {
  return (
    <Container>
      <h1>{currentProduct.name}</h1>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Questions & Answers</h1>
      <Listview currentProduct={currentProduct} />
    </Container>
  );
}
