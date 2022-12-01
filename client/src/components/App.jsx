import React, { useEffect } from "react";
import QA from "./QA.jsx"
import axios from 'axios';

export default function App() {

  const getProducts = () => {
    axios.get('/api/products/', {

    })
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const getProduct = () => {
    axios.get('/api/products/40344', {

    })
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const getReviews = () => {
    axios.get('/api/reviews?product_id=40344', {

    })
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  };

  const postReview = () => {
    axios.post('/api/reviews/', {
      product_id: 40344,
      rating: 3,
      summary: 'looks great, NOT',
      body: 'random text jake is cook',
      recommend: false,
      name: 'james',
      email: 'bigballerjames@gmail.com',
      photos: [],
      characteristics: {}
    })
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  };

  return (
    <div>
      <button onClick={postReview}>Post Review</button>
      <button onClick={getReviews}>Get Reviews</button>
      <button onClick={getProducts}>Get Products</button>
      <button onClick={getProduct}>Get One Product</button>
    </div>
  )
}