import React from "react";
import { parseISO } from "date-fns";
import { WordIncrement } from "./styles/WordIncrement.styled.js"
export default function AnswersList({ entry }) {
  return (
    <>
      {Object.keys(entry.answers).map((keyName, i) => {
        return(
          <div key={i}>
            <div style={{fontSize: '10px'}}><b>A: </b>{entry.answers[keyName].body}</div>
            <div style={{fontSize: '7px', color: "grey"}}> by {entry.answers[keyName].answerer_name}, {parseISO(entry.answers[keyName].date).toString().slice(4, 15)} | Helpful? <WordIncrement><u>Yes</u></WordIncrement> ({entry.answers[keyName].helpfulness})</div>
          </div>
        )
      })}
    </>
  )
}