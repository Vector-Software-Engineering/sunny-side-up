import React, { useState } from "react"

import ReviewTile from "./ReviewTile.jsx";
import AddReviewModal from "./AddReviewModal.jsx";
import { ReviewList } from './styles/ReviewList.styled.js';

export default function ({ prodID, reviews, visReviews, numReviews, sortBy, setSortBy, setNumReviews }) {

  const [showModal, setShowModal] = useState(true);

  return (
    <ReviewList>
      <h3>Reviews</h3>
      <div className='helper'>
        <span>Sort reviews by - </span>
        <span className='pointer' style={ sortBy==='helpful' ? {'fontWeight' : 'bold'} : null } onClick={ () => setSortBy('helpful') }> helpful </span>
        <span> - </span> 
        <span className='pointer'  style={ sortBy==='newest' ? {'fontWeight' : 'bold'} : null } onClick={ () => setSortBy('newest') }>newest </span>
        <span> - </span>
        <span className='pointer'  style={ sortBy==='relevance' ? {'fontWeight' : 'bold'} : null } onClick={ () => setSortBy('relevance') }>relevance</span>
      </div>
      {
        visReviews.map((review, index) => {
          console.log(review);
          return <ReviewTile key={ review.review_id } review={ review } />
        })
      }
      <div className='helper pointer'>
        {
          numReviews < reviews.length ? 
          <div onClick={() => { setNumReviews(numReviews + 2); }}>Load more reviews</div> : 
          <div onClick={() => { setNumReviews(2); }}>Show fewer reviews</div>
        }
      </div>

      {showModal && <AddReviewModal prodID={prodID} setShowModal={setShowModal}/>}
    </ReviewList>
  )
}