import React from 'react';
import Listview from './Listview.jsx';
import { Container } from './styles/Container.styled.js';

export default function QA({ currentProduct }) {
  return (
    <Container>
      <h4>{currentProduct.name}</h4>
      <h4 style={{ display: 'flex', justifyContent: 'center' }}>Questions & Answers</h4>
      <Listview currentProduct={currentProduct} />
    </Container>
  );
}
