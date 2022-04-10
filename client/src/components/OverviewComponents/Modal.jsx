import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import {RowContainer, ColumnContainer} from './OverviewStyles.jsx'
import { MdClose } from 'react-icons/md';
import ReactDom from 'react-dom'


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top:0%;
  right: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 20px;
  opacity: ${props => props.isRender ? 1 : 0};
  transition: opacity 0.6s linear;

`;

const ModalWrapper = styled.div`
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
  color: #000;
  position: relative;
  border-radius: 5px;
`;

const ModalImg = styled.img`
  max-height: 1080px;
  max-width: 1920px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = (props) => {
  const modalRef = useRef();
  const [isRender, setIsRender] = useState(false)
  useEffect(()=> {
    console.log('im fired', isRender)
    setIsRender(prev => true)
  }, [isRender])
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
    setIsRender(prev => false)
  }

  return ReactDom.createPortal (
    <>
      {props.showModal ? (
        <Background onClick={closeModal} ref={modalRef} isRender = {isRender}>
          <ModalWrapper>
            <ModalContent >
              <ModalImg src={props.img} alt='camera' />
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => props.setShowModal(prev => !prev)}
              />
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>, document.getElementById('portal')
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  img: PropTypes.string,
}

export default Modal;