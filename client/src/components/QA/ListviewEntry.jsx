import React, { useState } from "react";
import { WordIncrement } from './styles/WordIncrement.styled.js';
import AnswersList from './AnswersList.jsx';
import AddAnswerModal from './AddAnswerModal.jsx'


export default function ListviewEntry({ entry }) {
  const [showAModal, setShowAModal] = useState(false)

  const handleAnswerSubmit = (e) => {
    e.preventDefault()
    setShowAModal(!showAModal)
  }

  const toggleModal = () => {
    setShowAModal(!showAModal)
  }

  return (
    <>
      <div>Q: {entry.question_body} <span style={{fontSize: '7px', color: "grey"}}>Helpful? <WordIncrement><u>Yes</u></WordIncrement> ({entry.question_helpfulness}) | <WordIncrement><u onClick={handleAnswerSubmit}>Add Answer</u></WordIncrement></span></div>
      <AnswersList entry={entry}/>
      {showAModal && <AddAnswerModal currentProduct={entry} toggleModal={toggleModal}/>}
    </>
  )
}