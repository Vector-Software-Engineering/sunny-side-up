/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react'
import axios from 'axios';
import RadioClicker from './RadioClicker.jsx';
import { ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput, SmallerInput } from './styles/ReviewModal.styled.js';

export default function AddReviewModal({ prodID, setShowModal, characteristics }) {
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
  const [photos, setPhotos] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const chars = {};
    if (characteristics.Size !== undefined) {
      chars[characteristics.Size.id] = size;
    }
    if (characteristics.Width !== undefined) {
      chars[characteristics.Width.id] = width;
    }
    if (characteristics.Comfort !== undefined) {
      chars[characteristics.Comfort.id] = comfort;
    }
    if (characteristics.Quality !== undefined) {
      chars[characteristics.Quality.id] = quality;
    }
    if (characteristics.Length !== undefined) {
      chars[characteristics.Length.id] = length;
    }
    if (characteristics.Fit !== undefined) {
      chars[characteristics.Fit.id] = fit;
    }

    axios.post('/api/reviews', {
      product_id: prodID,
      rating: currRating,
      summary,
      body,
      recommend,
      name,
      email,
      characteristics: chars,
      photos,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
          <form id='add-review' onSubmit={(e) => { handleFormSubmit(e); }}>
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
            </div>
            <br />
            <br />
            <div>
              {
                characteristics.Size !== undefined
                  ? <RadioClicker name='size' setFunc={setSize} />
                  : null
              }
              {
                characteristics.Width !== undefined
                  ? <RadioClicker name='width' setFunc={setWidth} />
                  : null
              }
              {
                characteristics.Comfort !== undefined
                  ? <RadioClicker name='comfort' setFunc={setComfort} />
                  : null
              }
              {
                characteristics.Quality !== undefined
                  ? <RadioClicker name='quality' setFunc={setQuality} />
                  : null
              }
              {
                characteristics.Length !== undefined
                  ? <RadioClicker name='length' setFunc={setLength} />
                  : null
              }
              {
                characteristics.Fit !== undefined
                  ? <RadioClicker name='fit' setFunc={setFit} />
                  : null
              }

            </div>
            <div></div>
            <label>Summary</label><br></br>
            <SmallerInput name="summary" maxlength="60" placeholder="Ex. Best purchase ever" value={summary} onChange={(e) => setSummary(e.target.value)} /><br /><br />

            <label>Full Review</label><br></br>
            <BiggerInput name='body' maxlength='1000' placeholder="Why did you like the product or not?" value={body} onChange={(e) => setBody(e.target.value)} />
            <p>{`Currently ${body.length} chars. Need ${Math.max(50 - body.length, 0)} more. Max 1000`}</p>
            <br />
            <br />

            <label>Name</label><br></br>
            <SmallerInput name='name' maxlength='60' placeholder='jack543!' value={name} onChange={(e) => setName(e.target.value)} />
            <p>For privacy reasons, do not use your full name or email address</p>

            <label>Email*</label><br></br>
            <SmallerInput name='email' type="email" maxlength="60" placeholder="jack@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>For authentication reasons, you will not be emailed</p>

            <label>Photos</label><br></br>
            <SmallerInput type='file' id='photos' accept="image/*" onChange={(e) => { setPhotos(e.target.value); }} multiple /><br></br>

            <button type='submit'>Submit</button>
          </form>
        </ModalContent>
      </Modal>
  </ModalContainer>
  )
}