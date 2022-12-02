import React from "react";
import { WordIncrement } from './styles/WordIncrement.styled.js';
import AnswersList from './AnswersList.jsx';

export default function ListviewEntry({ entry }) {
  return (
    <>
      <div>Q: {entry.question_body} <span style={{fontSize: '7px', color: "grey"}}>Helpful? <WordIncrement><u>Yes</u></WordIncrement> ({entry.question_helpfulness}) | <WordIncrement><u>Add Answer</u></WordIncrement></span></div>
      <AnswersList entry={entry}/>
    </>
  )
}