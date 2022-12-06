import React, { useState } from "react";
import { WordIncrement } from './styles/WordIncrement.styled.js';
import AnswersList from './AnswersList.jsx';
import AddAnswerModal from './AddAnswerModal.jsx'
import axios from 'axios'


export default function ListviewEntry({ currentProduct, entry }) {
  const [showAModal, setShowAModal] = useState(false)
  const [clickHelpful, setClickHelpful] = useState(false)

  const handleAnswerSubmit = (e) => {
    e.preventDefault()
    setShowAModal(!showAModal)
  }

  const handleQuestionHelful = (e) => {

    if(!clickHelpful) {
      e.preventDefault()

      axios.put(`/api/qa/questions/${entry.question_id}/helpful`)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      setClickHelpful(true)
    }
  }

  const toggleModal = () => {
    setShowAModal(!showAModal)
  }

  return (
    <>
      <div style={{paddingTop: "10px"}}>Q: {entry.question_body} <span style={{fontSize: '12px', color: "grey"}}>Helpful? <WordIncrement onClick={handleQuestionHelful}><u>Yes</u></WordIncrement> ({clickHelpful ? entry.question_helpfulness + 1 : entry.question_helpfulness}) | <WordIncrement><u onClick={handleAnswerSubmit}>Add Answer</u></WordIncrement></span></div>
      <AnswersList entry={entry}/>
      {showAModal && <AddAnswerModal currentProduct={currentProduct} currentQuestion={entry} toggleModal={toggleModal}/>}
    </>
  )
}