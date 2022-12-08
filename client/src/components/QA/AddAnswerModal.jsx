import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput, SmallerInput } from './styles/Modal.styled.js'
import { Button } from './styles/Button.styled.js';

export default function AddAnswerModal({ currentProduct, currentQuestion, toggleModal }) {
  const [photos, setPhotos] = useState([]);
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

    const results = {};
    for (const [key, value] of formData) {
      results[key] = value
    }
    results['photos'] = photos;
    postAnswer(results);
    toggleModal();
  }

  function onChangeFiles(e) {
    if (e.target.files.length > 5) {
        alert('Only 5 files accepted.');
        document.getElementById('photos').value = null;
        e.preventDefault();
    } else {
      let res = [];
      for (let i = 0; i < event.target.files.length; i++) {
        res.push(URL.createObjectURL(event.target.files[i]));
      }
      setPhotos(res);
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
              <BiggerInput name='body' maxlength='1000' placeholder='Why did you like the product or not?' required></BiggerInput><br></br>
              <label>Nickname*</label><br></br>
              <SmallerInput name='name' maxlength='60' placeholder='jack543!' required></SmallerInput><br></br><h6>For privacy reasons, do not use your full name or email address</h6>
              <label>Email*</label><br></br>
              <SmallerInput name='email' type='email' maxlength='60' placeholder='jack@email.com' required></SmallerInput><br></br><h6>For authentication reasons, you will not be emailed</h6>
              <label>Photos</label><br></br>
              <SmallerInput type='file' id='photos' accept="image/*" onChange={onChangeFiles} multiple></SmallerInput><br></br>
              <div>
                {photos.map((photo) => <img style={{height: '150px', width: '150px'}}src={photo}></img>)}
              </div>
              <Button type='submit'>Submit</Button>
            </form>
          </ModalContent>
        </Modal>
      </ModalContainer>
    </>
  )
}