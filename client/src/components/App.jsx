import React, { useEffect } from "react";
import QA from "./QA.jsx"
import axios from 'axios';

export default function App() {


  //product_id: 40344,
  // rating: 3,
  // summary: 'looks great, NOT',
  // body: 'random text jake is cook',
  // recommend: false,
  // name: 'james',
  // email: 'bigballerjames@gmail.com',
  // photos: [],
  // characteristics: {}
const getProducts = () => {
  axios.get('/api/reviews/40344', {

  })
  .then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  })
};

getProducts();


  return (
    <div>
      <QA />
    </div>
  )
}