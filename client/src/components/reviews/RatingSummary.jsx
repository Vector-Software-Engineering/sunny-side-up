import React from "react";
import { RatingSummary } from './styles/RatingSummary.styled.js';
import './styles/styles.css';

export default function ({ reviews }) {

  const rating = reviews.reduce((total, next) => {
    return total + next.rating;
  }, 0) / reviews.length;

  return (
    <RatingSummary>
      <span>{ ' rating: ' }</span>
      <div className='stars' style={{'--rating' : rating}}></div>
    </RatingSummary>
  )
}