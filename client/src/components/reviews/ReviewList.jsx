import React, { useState, useEffect } from "react"

export default function () {
  // get reviews
  const [reviews, setReviews] = useState ([]);
  useEffect(() => {
    const getReviews = () => {
      axios.get('/api/reviews?product_id=40344')
        .then(response => {
          console.log(response.data);
        }).catch(error => {
          console.log(error);
        })
    };
  }, [])

  return (
    <div>
      Review List
    </div>
  )
}