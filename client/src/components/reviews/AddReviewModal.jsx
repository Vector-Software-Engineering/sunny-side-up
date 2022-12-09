import React, { useState } from "react"
import axios from 'axios';
import { ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput, SmallerInput } from './styles/ReviewModal.styled.js'

export default function AddReviewModal({ prodID, setShowModal }) {

  const [currRating, setCurrRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);

  const handleFormSubmit = () => {
    const obj = {
      product_id: prodID,
      rating: currRating,
      summary,
      body,
      recommend,
      name,
      email,
      characteristics: {},
    };

    console.log(obj);

    axios.post('/api/reviews', {
      product_id: prodID,
      rating: currRating,
      summary,
      body,
      recommend,
      name,
      email,
      characteristics: {
        size,
        width,
        comfort,
        quality,
        length,
        fit
      },
    });
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <Exit onClick={() => {setShowModal(false)}}>X</Exit>
          <h2 className="modal-title">Write Your Review</h2>
          <h3 className="modal-title">about the product name</h3>
        </ModalHeader>
        <ModalContent>
          <form id='add-review' onSubmit={handleFormSubmit}>
            <div className='rating'>
              <p>Overall Rating</p>
              <span className='pointer' onClick={() => setCurrRating(1)}>{ currRating > 0 ? '★' : '☆' }</span>
              <span className='pointer' onClick={() => setCurrRating(2)}>{ currRating > 1 ? '★' : '☆' }</span>
              <span className='pointer' onClick={() => setCurrRating(3)}>{ currRating > 2 ? '★' : '☆' }</span>
              <span className='pointer' onClick={() => setCurrRating(4)}>{ currRating > 3 ? '★' : '☆' }</span>
              <span className='pointer' onClick={() => setCurrRating(5)}>{ currRating > 4 ? '★' : '☆' }</span>
            </div>
            <div>
              <span>Do you recommend this product: </span>
              <input type="radio" name='recommend' onClick={() => setRecommend(true)}/>
              <label>yes</label>
              <input type="radio" name='recommend' onClick={() => setRecommend(false)}/>
              <label>no</label>
            </div><br /><br />
            <div>
              <p>Size</p>
              <input type="radio" name='size'/>
              <label>1</label>
              <input type="radio" name='size'/>
              <label>2</label>
              <input type="radio" name='size'/>
              <label>3</label>
              <input type="radio" name='size'/>
              <label>4</label>
              <input type="radio" name='size'/>
              <label>5</label>

              <p>Width</p>
              <input type="radio" name='width'/>
              <label>1</label>
              <input type="radio" name='width'/>
              <label>2</label>
              <input type="radio" name='width'/>
              <label>3</label>
              <input type="radio" name='width'/>
              <label>4</label>
              <input type="radio" name='width'/>
              <label>5</label>

              <p>Comfort</p>
              <input type="radio" name='comfort'/>
              <label>1</label>
              <input type="radio" name='comfort'/>
              <label>2</label>
              <input type="radio" name='comfort'/>
              <label>3</label>
              <input type="radio" name='comfort'/>
              <label>4</label>
              <input type="radio" name='comfort'/>
              <label>5</label>

              <p>Quality</p>
              <input type="radio" name='quality'/>
              <label>1</label>
              <input type="radio" name='quality'/>
              <label>2</label>
              <input type="radio" name='quality'/>
              <label>3</label>
              <input type="radio" name='quality'/>
              <label>4</label>
              <input type="radio" name='quality'/>
              <label>5</label>

              <p>Length</p>
              <input type="radio" name='length'/>
              <label>1</label>
              <input type="radio" name='length'/>
              <label>2</label>
              <input type="radio" name='length'/>
              <label>3</label>
              <input type="radio" name='length'/>
              <label>4</label>
              <input type="radio" name='length'/>
              <label>5</label>

              <p>Fit</p>
              <input type="radio" name='fit'/>
              <label>1</label>
              <input type="radio" name='fit'/>
              <label>2</label>
              <input type="radio" name='fit'/>
              <label>3</label>
              <input type="radio" name='fit'/>
              <label>4</label>
              <input type="radio" name='fit'/>
              <label>5</label>
            </div>
            <div></div>
            <label>Summary</label><br></br>
            <SmallerInput name='summary' maxlength='60' placeholder='Ex. Best purchase ever' required value={summary} onChange={(e) => setSummary(e.target.value)}></SmallerInput><br /><br />

            <label>Full Review</label><br></br>
            <BiggerInput name='body' maxlength='1000' placeholder='Why did you like the product or not?' required value={body} onChange={(e) => setBody(e.target.value)}></BiggerInput><br /><br />

            <label>Name</label><br></br>
            <SmallerInput name='name' maxlength='60' placeholder='jack543!' required value={name} onChange={(e) => setName(e.target.value)}></SmallerInput>
            <p>For privacy reasons, do not use your full name or email address</p>

            <label>Email*</label><br></br>
            <SmallerInput name='email' type='email' maxlength='60' placeholder='jack@email.com' required value={email} onChange={(e) => setEmail(e.target.value)}></SmallerInput>
            <p>For authentication reasons, you will not be emailed</p>

            <label>Photos</label><br></br>
            <SmallerInput type='file' id='photos' accept="image/*" onChange={() => {}} multiple></SmallerInput><br></br>

            <button type='submit'>Submit</button>
          </form>
        </ModalContent>
      </Modal>
  </ModalContainer>
  )
}