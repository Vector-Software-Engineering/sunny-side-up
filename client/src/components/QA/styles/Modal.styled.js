import styled from "styled-components";

const ModalContainer = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1000;
background-color: rgba(0,0,0,0.75);
display: flex;
`

const Modal = styled.section`
margin: auto;
width: 90%;
max-width: 40rem;
background-color: white;
`

const ModalHeader = styled.header`
padding: 1.5rem;
position: relative;
`
// display: flex;
// justify-content: space-between;

const ModalContent = styled.header`
padding: 1.5rem;
`

const Exit = styled.p`
padding: 0;
position: absolute;
top: 0;
right: 1rem;

&: hover {
  cursor: pointer;
}
`

const BiggerInput = styled.textarea`
width: 22.3em;

&: focus {
  height: 10em;
  width: 22.3em;
}
`

export {
  ModalContainer,
  Modal,
  ModalHeader,
  ModalContent,
  Exit,
  BiggerInput
}