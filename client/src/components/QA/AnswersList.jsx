import React, { useState, useEffect } from "react";
import { Button } from './styles/Button.styled.js';
import { Overflow } from './styles/Overflow.styled.js'
import AnswerEntry from './AnswerEntry.jsx'
import axios from 'axios'
export default function AnswersList({ entry }) {

  const [allAnswers, setAllAnswers] = useState({});
  const [numOfAnswers, setNumOfAnswers] = useState(true)

  useEffect(() => {
    axios.get(`/api/qa/questions/${entry.question_id}/answers`)
    .then((response) => {
      setAllAnswers(response.data.results);
    }).catch((error) => {
      console.log(error);
    });
  }, [])

  const handleMoreClick = (e) => {
    e.preventDefault()
    setNumOfAnswers(!numOfAnswers)
  }

  return (
    <>
      {numOfAnswers === true
      &&
      Object.keys(allAnswers).slice(0, 2).map((keyName, i) => {
        return(
          <AnswerEntry key={i} entry={allAnswers[keyName] }/>

        )
      })}

      {Object.keys(entry.answers).length > 2 && numOfAnswers === true ? <Button onClick={handleMoreClick}>MORE A</Button> : null}

      {numOfAnswers === false
        &&
        Object.keys(allAnswers).map((keyName, i) => {
          return(
            <AnswerEntry key={i} entry={allAnswers[keyName] }/>
          )
       })}


      {Object.keys(entry.answers).length > 2 && numOfAnswers === false ? <Button onClick={handleMoreClick}>LESS A</Button> : null}

      <br></br>
    </>
  )
}