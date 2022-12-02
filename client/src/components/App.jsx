import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QA from './QA/QA.jsx';
import Overview from './productdetails/Overview.jsx';

export default function App() {


  const [currentProduct, setCurrentProduct] = useState({}); //used in product details
  const [allReviews, setAllReviews] = useState(0); //used in product details
  const [numReviews, setNumReviews] = useState(0); //used in product details
  const [allStyles, setAllStyles] = useState ([]); //used in product details
  const [currentStyle, setCurrentStyle] = useState('');  //used in product details

  useEffect(() => {
  	getProduct();
    getReviews();
    getProductStyles();
  }, []);

  const getProducts = () => {
    axios.get('/api/products/', {})
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getProductStyles = () => {
    axios.get('/api/products/40344/styles', {})
      .then((response) => {
        //console.log(response.data);
        setAllStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getProduct = () => {
    axios.get('/api/products/40344', {})
      .then((response) => {
        //console.log(response.data);
        setCurrentProduct(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getReviews = () => {
    axios.get('/api/reviews?product_id=40344', {})
      .then((response) => {
        //console.log(response.data);
        setAllReviews(getAverageReviews(response.data));
      }).catch((error) => {
        console.log(error);
      });
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
      characteristics: {},
    })
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getAverageReviews = (reviewData) => { //used in product details
    let ratings = reviewData.results;
    setNumReviews(ratings.length);
    let result = 0;
    for (let i = 0; i < ratings.length; i++) {
      result += ratings[i].rating;
    }
    return result / ratings.length;
  }

  return (
    <div>
      <Overview
      currentProduct={currentProduct}
      allReviews={allReviews}
      numReviews={numReviews}
      allStyles={allStyles}
      currentStyle={currentStyle}
      setCurrentStyle={setCurrentStyle}/>
      <QA />
      <button type="button" onClick={postReview}>Post Review</button>
      <button type="button" onClick={getReviews}>Get Reviews</button>
      <button type="button" onClick={getProducts}>Get Products</button>
      <button type="button" onClick={getProduct}>Get One Product</button>
      <button type="button" onClick={getProductStyles}>Get Product Styles</button>
    </div>
  );
}
