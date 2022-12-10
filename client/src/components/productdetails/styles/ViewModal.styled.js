import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 500px;
  right: 0;
  bottom: 100px;
  left: 0;
  z-index: 1000;
  background-color: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 20px;
  height: 80%;
  width: 80%;

  button {
    display: flex;
    position: relative;
    margin-bottom: 655px;
  }
`;

const Modal = styled.section`
margin: auto;
width: 60%;
max-height: 72%;
max-width: 40rem;
background-color: white;
overflow-y: auto;
display: inline-block;
`;

const ModalHeader = styled.header`
border-stlye: solid;
border-size: 1px;
padding: 1rem;
position: relative;
`;

const ModalContent = styled.header`
padding: 1.5rem;
`;

const Exit = styled.p`
padding: 0;
position: absolute;
top: 0;
right: 1rem;

&: hover {
  cursor: pointer;
}
`;

const BiggerInput = styled.textarea`
width: 70%;

&: focus {
  height: 10em;
}
`;
const SmallerInput = styled.input`
width: 50%;
`;

export {
  ModalContainer,
  Modal,
  ModalHeader,
  ModalContent,
  Exit,
  BiggerInput,
  SmallerInput,
};
