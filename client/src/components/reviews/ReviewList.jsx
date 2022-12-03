import React, { useState, useEffect } from "react"
import axios from "axios";
import ReviewTile from "./ReviewTile.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";

export default function () {
  // get reviews
  const [reviews, setReviews] = useState ([]);
  const [visReviews, setVisReviews] = useState([]);
  const [numReviews, setNumReviews] = useState(2);
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    axios.get('/api/reviews?product_id=40344')
        .then(response => {
          console.log(response.data.results);
          setReviews(response.data.results);
        }).catch(error => {
          console.log(error);
        })
  }, [])

  useEffect(() => {
    updateVisReviews();
  }, [reviews, numReviews, sortBy])
 
  const updateVisReviews = () => {
    // add sorting
    setVisReviews(reviews.slice(0, numReviews));
  }

  return (
    <div>
      <h3>Reviews and Ratings</h3>
      <RatingBreakdown />
      <h3>Reviews</h3>
      <span>Sort reviews by</span>
      <span onClick={ () => setSortBy('helpful') }> - helpful - </span>
      <span onClick={ () => setSortBy('newest') }>newest - </span>
      <span onClick={ () => setSortBy('relevance') }>relevance</span>
      {
        visReviews.map((review, index) => {
          console.log(review);
          return <ReviewTile key={ review.review_id } review={ review } />
        })
      }
      {
        numReviews < reviews.length ? 
        <div onClick={() => { setNumReviews(numReviews + 2); }}>Load more reviews</div> : 
        <div onClick={() => { setNumReviews(2); }}>Show less reviews</div>
      }
    </div>
  )
}