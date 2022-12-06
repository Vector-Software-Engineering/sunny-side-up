import React, { useState, useEffect } from "react";
import Listview from './Listview.jsx';
import { Container } from './styles/Container.styled.js';
import { Input } from './styles/Input.styled.js';
import axios from 'axios';



export default function QA({ currentProduct }) {
  return (
    <>
    <h1 style={{display:"flex", justifyContent:"center"}}>Questions & Answers</h1>
      <Container>
        <Listview currentProduct={currentProduct}/>
      </Container>
    </>
  )
}