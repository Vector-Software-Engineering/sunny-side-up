import React, { useState, useEffect } from "react";
import Listview from './Listview.jsx';
import { Container } from './styles/Container.styled.js';
import { Input } from './styles/Input.styled.js';
import axios from 'axios';

const data = {
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
  ]
}


export default function QA({ currentProduct }) {

  const [QA, setQA] = useState([]);
  const [filteredQA, setFilteredQA] = useState([]);

  useEffect(() => {
    //get all questions
    axios.get('/api/qa/questions?product_id=40347')
    .then((response) => {
      setQA(response.data.results);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleSearchChange = (e) => {
    if(e.target.value.length >= 3) {
      var arr = []
      for(var i = 0; i < QA.length; i++) {
        if(QA[i].question_body.toLowerCase().includes(e.target.value)) {
          arr.push(QA[i])
        }
      }
      arr.length > 0 ? setFilteredQA(arr) : null
      console.log("Test")
    }
    // console.log('query', query)
    // console.log('tv', e.target.value)
    // console.log('qa', QA)
  }

  return (
    <>
      <Container>
        <h4>Questions & Answers</h4>
        <Input onChange={handleSearchChange} placeholder ="SEARCH"></Input>
        <Listview currentProduct={currentProduct}/>
      </Container>
    </>
  )
}