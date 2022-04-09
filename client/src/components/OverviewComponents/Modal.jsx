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
`;

const ModalWrapper = styled.div`
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  /* display: grid;
  grid-template-columns: 1fr; */
  position: relative;
  z-index: 20;
  border-radius: 5px;
`;

const ModalImg = styled.img`
  max-height: 1200px;
  max-width: 1000px;
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
    color: #fff;
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
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  }

  return ReactDom.createPortal (
    <>
      {props.showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalContent>
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