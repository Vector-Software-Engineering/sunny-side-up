import React, { useState, useEffect } from "react";
import { Button } from './styles/Button.styled.js';
import AnswerEntry from './AnswerEntry.jsx'

export default function AnswersList({ entry }) {

  const [allAnswers, setAllAnswers] = useState({});
  const [numOfAnswers, setNumOfAnswers] = useState(true)

  useEffect(() => {
    setAllAnswers(entry.answers)
  })



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
          <AnswerEntry key={i} entry={allAnswers[keyName] }/>

        )
      })
      : null}

      {Object.keys(entry.answers).length > 2 && numOfAnswers === true ? <Button onClick={handleMoreClick}>MORE A</Button> : null}

      {numOfAnswers === false
      ?
      Object.keys(allAnswers).map((keyName, i) => {
        return(
          <AnswerEntry key={i} entry={allAnswers[keyName] }/>
        )
      })
      : null}


      {Object.keys(entry.answers).length > 2 && numOfAnswers === false ? <Button onClick={handleMoreClick}>LESS A</Button> : null}
    </>
  )
}