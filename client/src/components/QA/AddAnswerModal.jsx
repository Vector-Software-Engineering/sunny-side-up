import React, { useState } from "react"
import axios from 'axios'
import { ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput } from './styles/Modal.styled.js'
import { Button } from './styles/Button.styled.js'

export default function AddAnswerModal({ currentProduct, currentQuestion, toggleModal }) {

  const [photos, setPhotos] = useState([])
  const postAnswer = (results) => {
    axios.post(`/api/qa/questions/${currentQuestion.question_id}/answers`, results)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
  }

  const handleCloseClick =(e) => {
    e.preventDefault()
    toggleModal()
  }

  const handleFormSubmit =(e) => {
    e.preventDefault()

    const form = document.getElementById('add-question');
    const formData = new FormData(form);

    const results = {}
    for (const [key, value] of formData) {
      results[key] = value
    }
    results['photos'] = photos
    console.log('should be formatted', results)
    postAnswer(results)
    toggleModal()
  }

  function onChangeFiles(e) {
    if (e.target.files.length > 5) {
        alert("Only 5 files accepted.");
        document.getElementById('photos').value = null
        e.preventDefault();
    } else {
      var res = []
      var arr = Array.from(e.target.files)
      arr.forEach(file => {
        res.push(file.name)
      })
      setPhotos(res)
    }
}


  return (
    <>
      <ModalContainer>
        <Modal>
          <ModalHeader>
            <Exit onClick={handleCloseClick}>X</Exit>
            <h2 className="modal-title">Submit Your Answer</h2>
            <h5>{currentProduct.name} : {currentQuestion.question_body}</h5>
          </ModalHeader>
          <ModalContent>
            <form id='add-question' onSubmit={handleFormSubmit}>
              <label>Your Answer*</label><br></br>
              <BiggerInput name='body' placeholder='Why did you like the product or not?' required></BiggerInput><br></br>
              <label>Nickname*</label><br></br>
              <input name='name' style={{width: '22.3em', maxLength: '10'}} placeholder='jack543!' required></input><br></br>
              <label>Email*</label><br></br>
              <input name='email' style={{width: '22.3em'}} placeholder='jack@email.com' required></input><br></br>
              <label>Photos</label><br></br>
              <input type='file' id='photos' accept="image/*" onChange={onChangeFiles}style={{width: '22.3em'}} multiple></input><br></br>
              <Button type='submit'>Submit</Button>
            </form>
          </ModalContent>
        </Modal>
      </ModalContainer>
    </>
  )
}