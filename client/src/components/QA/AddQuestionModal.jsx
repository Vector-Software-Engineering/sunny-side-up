import React from "react"
import axios from 'axios'
import { ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput, SmallerInput } from './styles/Modal.styled.js'
import { Button } from './styles/Button.styled.js'

export default function AddQuestionModal({ currentProduct, toggleModal }) {

  const postQuestion = (results) => {
    axios.post('/api/qa/questions', results)
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

    results['product_id'] = currentProduct.id
    postQuestion(results)
    toggleModal()
  }

  return (
    <>
      <ModalContainer>
        <Modal>
          <ModalHeader>
            <Exit onClick={handleCloseClick}>X</Exit>
            <h2 className="modal-title">Ask Your Question</h2>
            <h5>About the {currentProduct.name}</h5>
          </ModalHeader>
          <ModalContent>
            <form id='add-question' onSubmit={handleFormSubmit}>
              <label>Question*</label><br></br>
              <BiggerInput name='body' maxlength='1000' placeholder='Why did you like the product or not?' required></BiggerInput><br></br>
              <label>Nickname*</label><br></br>
              <SmallerInput name='name' maxlength='60' placeholder='jackson11!' required></SmallerInput><h6>For privacy reasons, do not use your full name or email address</h6>
              <label>Email*</label><br></br>
              <SmallerInput name='email' type='email' maxlength='60' placeholder='example@domain.com' required></SmallerInput><br></br>
              <h6>For authentication reasons, you will not be emailed</h6>
              <Button type='submit'>Submit</Button>
            </form>
          </ModalContent>
        </Modal>
      </ModalContainer>
    </>
  )
}