import React from "react"
import RatingSummary from "./RatingSummary.jsx";

export default function ({ reviews }) {
  return (
    <div>
      <h3>Ratings</h3>
      <RatingSummary />
      <a>5 Star Reviews - 10</a><br />
      <a>4 Star Reviews - 10</a><br />
      <a>3 Star Reviews - 10</a><br />
      <a>2 Star Reviews - 10</a><br />
      <a>1 Star Reviews - 10</a><br />
    </div>
  )
}