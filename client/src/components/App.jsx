import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QA from './QA/QA.jsx';
import Overview from './productdetails/overview.jsx';
import { AppDiv } from './App.styled.js';
import RatingsAndReviews from './reviews/RatingsAndReviews.jsx';

export default function App() {
  const [currentProduct, setCurrentProduct] = useState({});
  const [allReviews, setAllReviews] = useState(0);
  const [numReviews, setNumReviews] = useState(0);
  const [allStyles, setAllStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState('');
  const [reviews, setReviews] = useState([]);

  const [tab, setTab] = useState('detail');

  const getProducts = () => {
    axios.get('/api/products/', {})
      .then((response) => {
        // console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getProductStyles = () => {
    axios.get('/api/products/40348/styles', {}) // jacket is 40344, shoes are 40348
      .then((response) => {
        // console.log(response.data);
        setAllStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getProduct = () => {
    axios.get('/api/products/40344', {})
      .then((response) => {
        // console.log(response.data);
        setCurrentProduct(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getAverageReviews = (reviewData) => {
    const ratings = reviewData.results;
    setNumReviews(ratings.length);
    let result = 0;
    for (let i = 0; i < ratings.length; i += 1) {
      result += ratings[i].rating;
    }
    return result / ratings.length;
  };

  const getReviews = () => {
    axios.get('/api/reviews?product_id=40344', {})
      .then((response) => {
        // console.log(response.data.results);
        setReviews(response.data.results);
        setAllReviews(getAverageReviews(response.data));
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
    getReviews();
    getProductStyles();
  }, []);

  return (
    <AppDiv>
      <h1>Product Name</h1>
      <div className="center-bar">
        <span className='pointer' style={{'fontWeight': (tab==='detail' ? 'bold' : '')}} onClick={ () => {setTab('detail')} }>detail</span>
        <span> - </span>
        <span className='pointer' style={{'fontWeight': (tab==='qa' ? 'bold' : '')}} onClick={ () => {setTab('qa')} }>qa</span>
        <span> - </span>
        <span className='pointer' style={{'fontWeight': (tab==='reviews' ? 'bold' : '')}} onClick={ () => {setTab('reviews')} }>reviews</span>
      </div>

      {
        tab === 'detail' ? (
        <Overview
          currentProduct={currentProduct}
          allReviews={allReviews}
          numReviews={numReviews}
          allStyles={allStyles}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          reviews={reviews} />
      ) :
          null
      }

      {
        tab === 'qa' && <QA currentProduct={currentProduct} />
      }

      {
        tab === 'reviews' && <RatingsAndReviews currentProduct={currentProduct} />
      }
    </AppDiv>
  );
}
