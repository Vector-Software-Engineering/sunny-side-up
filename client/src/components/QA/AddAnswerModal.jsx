import React from "react"
import axios from 'axios'
import { ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput } from './styles/Modal.styled.js'
import { Button } from './styles/Button.styled.js'

export default function AddAnswerModal({ currentProduct, toggleModal }) {

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
            <h2 className="modal-title">Add Your Answer</h2>
            <h5>About the</h5>
          </ModalHeader>
          <ModalContent>
            <form id='add-question' onSubmit={handleFormSubmit}>
              <label>Your Answer*</label><br></br>
              <BiggerInput name='body' placeholder='Why did you like the product or not?' required></BiggerInput><br></br>
              <label>Nickname*</label><br></br>
              <input name='name' style={{width: '22.3em', maxLength: '10'}} placeholder='jackson11!' required></input><br></br>
              <label>Email*</label><br></br>
              <input name='email' style={{width: '22.3em'}} placeholder='example@domain.com' required></input><br></br>
              <Button type='submit'>Submit</Button>
            </form>
          </ModalContent>
        </Modal>
      </ModalContainer>
    </>
  )
}