import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { WordIncrement } from "./styles/WordIncrement.styled.js"
import { Button } from './styles/Button.styled.js';
import axios from 'axios'

export default function AnswerEntry({ entry }) {

  const [clickHelpful, setClickHelpful] = useState(false)
  const [clickReport, setClickReport] = useState(false)

  //formats date
  const { date } = entry
  const formatDate = format(new Date(date), 'MMMM d, yyyy')

  const handleAnswerHelpful = (e, id) => {
    e.preventDefault();
    if(!clickHelpful) {
      axios.put(`/api/qa/answers/${id}/helpful`)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      setClickHelpful(true)
    }
  }

  const handleAnswerReport = (e, id) => {
    if(!clickReport) {
      e.preventDefault();
      axios.put(`/api/qa/answers/${id}/report`)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      setClickReport(true)
    }
  }

  return (
    <>
      <div style={{fontSize: '14px'}}><b>A: </b>{entry.body}</div>
      <div style={{fontSize: '12px', color: "grey"}}> by {entry.answerer_name} | {formatDate} | Helpful? <WordIncrement onClick={(e) => handleAnswerHelpful(e, entry.id)}><u>Yes</u></WordIncrement> ({clickHelpful ? entry.helpfulness + 1 : entry.helpfulness}) | <WordIncrement onClick={(e) => handleAnswerReport(e, entry.answer_id)}><u>{clickReport ? "Reported" : "Report"}</u></WordIncrement></div>
    </>
  )
}