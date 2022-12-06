import React, { useState, useEffect } from "react";
import { Button } from './styles/Button.styled.js';
import AnswerEntry from './AnswerEntry.jsx'
import axios from 'axios'
import { AnswerOverflow } from './styles/AnswerOverflow.styled.js';

export default function AnswersList({ entry }) {

  const [allAnswers, setAllAnswers] = useState({});
  const [numOfAnswers, setNumOfAnswers] = useState(true)

  //adding get data breaks the question to answer sync
  useEffect(() => {
  //   axios.get(`/api/qa/questions/${entry.question_id}/answers?count=100`)
  //   .then((response) => {
  //     setAllAnswers(response.data.results);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }, [])
    setAllAnswers(entry.answers)
  })



  const handleMoreClick = (e) => {
    e.preventDefault()
    setNumOfAnswers(!numOfAnswers)
  }

  return (
    <AnswerOverflow>
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

      <br></br>
    </AnswerOverflow>
  )
}