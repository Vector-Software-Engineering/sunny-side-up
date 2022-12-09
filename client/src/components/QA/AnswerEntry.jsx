import React, { useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import { WordIncrement } from './styles/WordIncrement.styled.js';

export default function AnswerEntry({ entry }) {
  const [clickHelpful, setClickHelpful] = useState(false);
  const [clickReport, setClickReport] = useState(false);

  // format date
  const { date } = entry;
  const formatDate = `${date.slice(5, 7)} ${date.slice(8, 10)} ${date.slice(0, 4)}`;
  const postedDate = format(new Date(formatDate), 'MMMM d, yyyy');

  // console.log(formatDate)
  const handleAnswerHelpful = (e, id) => {
    e.preventDefault();
    if (!clickHelpful) {
      axios.put(`/api/qa/answers/${id}/helpful`)
        .then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });

      setClickHelpful(true);
    }
  };

  const handleAnswerReport = (e, id) => {
    if (!clickReport) {
      e.preventDefault();
      axios.put(`/api/qa/answers/${id}/report`)
        .then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });

      setClickReport(true);
    }
  };

  return (
    <>
      <div style={{ fontSize: '20px', paddingTop: '15px' }}>
        <b>A: </b>
        {entry.body}
      </div>
      <div style={{ fontSize: '14px', color: 'grey' }}>
        by&nbsp;
        {entry.answerer_name}
        &nbsp;
        |
        &nbsp;
        {postedDate}
        &nbsp;
        |
        &nbsp;
        Helpful?
        &nbsp;
        <WordIncrement onClick={(e) => handleAnswerHelpful(e, entry.answer_id)}>
          <u>Yes</u>
        </WordIncrement>
        (
        {clickHelpful ? entry.helpfulness + 1 : entry.helpfulness}
        ) |
        &nbsp;
        <WordIncrement onClick={(e) => handleAnswerReport(e, entry.answer_id)}><u>{clickReport ? 'Reported' : 'Report'}</u></WordIncrement>
      </div>
    </>
  );
}
