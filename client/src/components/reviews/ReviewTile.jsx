import React from "react"

export default function ({ review }) {
  return (
    <div className='review'>
      <h3>{review.summary}</h3>
      <p>{'name: ' + review.reviewer_name}</p>
      <p>{'body: ' + review.body}</p>
      <p>{review.rating + ' stars'}</p>
      <p>{review.recommend + ' recommend. '}</p>
      <p>{review.response ? ('Response from seller: ' +  review.response) : null }</p>
      <p>{'helpfulness: ' + review.helpfulness}</p>
      {/* <h1>{review.photos}</h1> */}
    </div>
  )
}