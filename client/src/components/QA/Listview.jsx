import React, { useState, useEffect} from "react";
import ListviewEntry from './ListviewEntry.jsx';
import axios from 'axios';
import { Button } from './styles/Button.styled.js';
import { Input } from './styles/Input.styled.js';

export default function Listview({ data }) {

  const [QA, setQA] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [numOfQuestions, setNumOfQuestion] = useState(2)

  useEffect(() => {
    //get all questions
    axios.get('/api/qa/questions?product_id=40347')
    .then((response) => {
      setQA(response.data.results);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    var copy = [...QA]
    copy = copy.slice(0, numOfQuestions)
    setFilteredQuestions(copy)
  }, [QA, numOfQuestions])

  const handleSearchChange = (e) => {
    if(e.target.value.length >= 3 || e.target.value.length === 0) {
      var arr = []
      for(var i = 0; i < QA.length; i++) {
        if(QA[i].question_body.toLowerCase().includes(e.target.value)) {
          arr.push(QA[i])
        }
      }
      arr.length > 0 ? setFilteredQuestions(arr) : null
    }
    // console.log('query', query)
    // console.log('tv', e.target.value)
    // console.log('qa', QA)
  }

  const handleMoreClick = (e) => {
    e.preventDefault()
    var newCount = numOfQuestions + 2;
    setNumOfQuestion(newCount)
  }

  return (
    <>
      <Input onChange={handleSearchChange} placeholder ="SEARCH"></Input>
      {filteredQuestions.length ? filteredQuestions.map((entry, index) => <ListviewEntry key={index} entry={entry}/>): null}
      {numOfQuestions < filteredQuestions.length ? <Button onClick={handleMoreClick}>MORE Q</Button> : null} <Button>ADD</Button>
    </>
  )
}