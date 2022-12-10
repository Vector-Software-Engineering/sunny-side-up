import React, { useState } from 'react';
import axios from 'axios';
import { WordIncrement } from './styles/WordIncrement.styled.js';
import { Bucket } from './styles/Bucket.styled.js';
import AnswersList from './AnswersList.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';

export default function ListviewEntry({ currentProduct, entry }) {
  const [showAModal, setShowAModal] = useState(false);
  const [clickHelpful, setClickHelpful] = useState(false);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    setShowAModal(!showAModal);
  };

  const handleQuestionHelful = (e) => {
    if (!clickHelpful) {
      e.preventDefault();

      axios.put(`/api/qa/questions/${entry.question_id}/helpful`)
        .then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });

      setClickHelpful(true);
    }
  };

  const toggleModal = () => {
    setShowAModal(!showAModal);
  };

  return (
    <Bucket>
      <div style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '20px' }}>
        <b>Q:</b>
        &nbsp;
        {entry.question_body}
        &nbsp;
        <span style={{ fontSize: '14px', color: 'grey' }}>
          Helpful?&nbsp;
          <WordIncrement onClick={handleQuestionHelful}><u>Yes</u></WordIncrement>
          (
          {clickHelpful ? entry.question_helpfulness + 1 : entry.question_helpfulness}
          )
          |&nbsp;
          <WordIncrement>
            <u role="presentation" onClick={handleAnswerSubmit} onKeyDown={handleAnswerSubmit}>
              Add Answer
            </u>
          </WordIncrement>
        </span>
      </div>
      <AnswersList entry={entry} />
      {showAModal && <AddAnswerModal currentProduct={currentProduct} currentQuestion={entry} toggleModal={toggleModal} />}
    </Bucket>
  );
}
