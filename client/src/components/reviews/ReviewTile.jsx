import React from "react";
import { ReviewTile } from './styles/ReviewTile.styled.js';
import { parseISO, format } from 'date-fns';

export default function ({ review }) {

  return (
    <ReviewTile>
      <div className='top'>
        <h3>{review.summary}</h3>
        <span>{'by: ' + review.reviewer_name}</span>
        <span>{format(parseISO(review.date), 'MMM d, yyyy')}</span>
        <span>{review.rating + ' stars'}</span>
      </div>
      <p>{review.body}</p>
      {
        review.recommend ?
        <p>✓ I recommend this product</p> : 
        null
      }      
      <p>{review.response ? ('Response from seller: ' +  review.response) : null }</p>
      <p>{review.helpfulness + ' customers found this review helpful'}</p>
      {/* <h1>{review.photos}</h1> */}
    </ReviewTile>
  )
}