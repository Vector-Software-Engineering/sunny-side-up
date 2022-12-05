import React, { useState, useEffect } from "react"
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import { Container } from './styles/Container.styled.js';

export default function () {

  return (
    <Container>
      <h3>Reviews and Ratings</h3>
      <div className='main'>
        <RatingBreakdown />
        <ReviewList />
      </div>
    </Container>
  )
}