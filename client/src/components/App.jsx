import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes.js';
import QA from './QA/QA.jsx';
import Overview from './productdetails/overview.jsx';
import ReviewList from './reviews/RatingsAndReviews.jsx';
import { AppDiv } from './App.styled.js';

export default function App() {
  const [currentProduct, setCurrentProduct] = useState({});
  const [allReviews, setAllReviews] = useState(0);
  const [numReviews, setNumReviews] = useState(0);
  const [allStyles, setAllStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState('');
  const [reviews, setReviews] = useState([]);
  const [tab, setTab] = useState('detail');

  const getInitialTheme = () => {
    const data = localStorage.getItem('theme');
    if (data === null || data === 'light') {
      localStorage.setItem('theme', 'light');
      return 'light';
    }
    return 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme());

  const themeToggler = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

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

  const postReview = () => {
    axios.post('/api/reviews/', {
      product_id: 40344,
      rating: 2,
      summary: 'looks great, NOT, go to SUNNY SIDE UP to get some real DRIP',
      body: 'random text jake is cool fr, but also chefs it up it the kitchen',
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

  useEffect(() => {
    getProduct();
    getReviews();
    getProductStyles();
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppDiv>
        <h1>Product Name</h1>
        { tab !== 'detail' ? <span onClick={() => { setTab('detail'); }}>detail - </span> : null }
        { tab !== 'qa' ? <span onClick={() => { setTab('qa'); }}>qa - </span> : null }
        { tab !== 'reviews' ? <span onClick={() => { setTab('reviews'); }}>reviews</span> : null }
        <button style={{top:0, right:0}} onClick={themeToggler}>Toggle Theme</button>
        {
          tab === 'detail'
            ? (
              <Overview
                currentProduct={currentProduct}
                allReviews={allReviews}
                numReviews={numReviews}
                allStyles={allStyles}
                currentStyle={currentStyle}
                setCurrentStyle={setCurrentStyle}
                reviews={reviews}
              />
            )
            : null
        }

        {
          tab === 'qa' && <QA currentProduct={currentProduct} />
        }

        {
          tab === 'reviews' && <ReviewList />
        }
      </AppDiv>
    </ThemeProvider>
  );
}
