import React, { useState } from "react"
import axios from 'axios'
import { ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput, SmallerInput } from './styles/ReviewModal.styled.js'

export default function AddReviewModal({ prodID, setShowModal }) {

  const handleFormSubmit = () => {

  }

  return (
    <>
      <ModalContainer>
        <Modal>
          <ModalHeader>
            <Exit onClick={() => {setShowModal(false)}}>X</Exit>
            <h2 className="modal-title">Submit Your Answer</h2>
          </ModalHeader>
          <ModalContent>
            <form id='add-review' onSubmit={handleFormSubmit}>
              <label>Your Answer*</label><br></br>
              <BiggerInput name='body' maxlength='1000' placeholder='Why did you like the product or not?' required></BiggerInput><br></br>
              <label>Nickname*</label><br></br>
              <SmallerInput name='name' maxlength='60' placeholder='jack543!' required></SmallerInput><br></br><h6>For privacy reasons, do not use your full name or email address</h6>
              <label>Email*</label><br></br>
              <SmallerInput name='email' type='email' maxlength='60' placeholder='jack@email.com' required></SmallerInput><br></br><h6>For authentication reasons, you will not be emailed</h6>
              <label>Photos</label><br></br>
              {/* <SmallerInput type='file' id='photos' accept="image/*" onChange={onChangeFiles} multiple></SmallerInput><br></br> */}
              {/* <Button type='submit'>Submit</Button> */}
            </form>
          </ModalContent>
        </Modal>
      </ModalContainer>
    </>
  )
}