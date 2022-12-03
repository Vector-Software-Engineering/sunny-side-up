import React, { useState, useEffect } from "react";
import { parseISO } from "date-fns";
import { WordIncrement } from "./styles/WordIncrement.styled.js"
import { Button } from './styles/Button.styled.js';

export default function AnswersList({ entry }) {

  const [allAnswers, setAllAnswers] = useState(entry.answers);
  const [numOfAnswers, setNumOfAnswers] = useState(true)

  const handleMoreClick = (e) => {
    e.preventDefault()
    setNumOfAnswers(!numOfAnswers)
  }

  return (
    <>

      {numOfAnswers === true
      ?
      Object.keys(allAnswers).slice(0, 2).map((keyName, i) => {
        return(
          <div key={i}>
            <div style={{fontSize: '10px'}}><b>A: </b>{allAnswers[keyName].body}</div>
            {/* DATE IS ONE DAY BEHIND */}
            <div style={{fontSize: '7px', color: "grey"}}> by {allAnswers[keyName].answerer_name}, {parseISO(allAnswers[keyName].date).toString().slice(4, 15)} | Helpful? <WordIncrement><u>Yes</u></WordIncrement> ({allAnswers[keyName].helpfulness})</div>
          </div>
        )
      })
      : null}

      {Object.keys(entry.answers).length > 2 && numOfAnswers === true ? <Button onClick={handleMoreClick}>MORE A</Button> : null}

      {numOfAnswers === false
      ?
      Object.keys(allAnswers).map((keyName, i) => {
        return(
          <div key={i}>
            <div style={{fontSize: '10px'}}><b>A: </b>{allAnswers[keyName].body}</div>
            {/* DATE IS ONE DAY BEHIND */}
            <div style={{fontSize: '7px', color: "grey"}}> by {allAnswers[keyName].answerer_name}, {parseISO(allAnswers[keyName].date).toString().slice(4, 15)} | Helpful? <WordIncrement><u>Yes</u></WordIncrement> ({allAnswers[keyName].helpfulness})</div>
          </div>
        )
      })
      : null}


      {Object.keys(entry.answers).length > 2 && numOfAnswers === false ? <Button onClick={handleMoreClick}>LESS A</Button> : null}
    </>
  )
}