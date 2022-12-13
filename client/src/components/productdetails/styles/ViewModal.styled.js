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
  height: 100%;


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

const ExtendedViewContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledLeftArrow = styled.div`
  position: relative;
  margin-top: 320px;
  font-size: 100px;
  cursor: pointer;
  color: white;
`;

const StyledRightArrow = styled.div`
  position: relative;
  margin-top: 320px;
  font-size: 100px;
  cursor: pointer;
  color: white;
`;

const StyledDots = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: blue;
  display: flex;
  justify-content: center;
`;

const StyledImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledExit = styled.button`
`;

const StyledExtendedImg = styled.img`
  cursor: crosshair;
`;

const StyledMagnifier = styled.div`
  display: ${(props) => props.showMagnify ? '' : 'none'};
  position: absolute;
  pointerEvents: none;
  height: 200px;
  width: 200px;
  top: ${(props) => props.y - 200 / 2}px;
  left: ${(props) => props.x - 200 / 2}px;
  opacity: 1;
  border: 1px solid lightgray;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: ${(props) => props.width * 2.5}px ${(props) => props.height * 2.5}px;
  background-position: ${(props) => -props.x * 2.5 + 200 / 2}px ${(props) => -props.y * 2.5 + 200 / 2}px;
  cursor: zoom-out;
`;

export {
  ModalContainer,
  Modal,
  ModalHeader,
  ModalContent,
  Exit,
  BiggerInput,
  SmallerInput,
  ExtendedViewContainer,
  StyledLeftArrow,
  StyledRightArrow,
  StyledDots,
  StyledExit,
  StyledImgContainer,
  StyledExtendedImg,
  StyledMagnifier,
};
