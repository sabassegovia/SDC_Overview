import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactDom from 'react-dom'


const SizeModalBackground = styled.div`

  background: #000;
  opacity: .60;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 222;
`
const SizeModalWrapper = styled.div`
  opacity: 1;
  display: flex;
  position: relative;
  flex-direction: column;


  margin: 10px;
  border:10px solid #fff;
`
const SizeModalContent = styled.h1`
  font-size: 36px;
  color: #AFA9A9;
  opacity: 1;
`
const SelectSizeModal = ({openSizeModal, setOpenSizeModal}) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenSizeModal(false)
    }
  }

  return ReactDom.createPortal(
    <div>
      {openSizeModal ? <SizeModalBackground ref = {modalRef} onClick = {closeModal}>
        <SizeModalWrapper>
          <SizeModalContent>Please select a size</SizeModalContent>
        </SizeModalWrapper>
      </SizeModalBackground> : null}
    </div>, document.getElementById('portal')
  )
}

SelectSizeModal.propTypes = {
  openSizeModal: PropTypes.bool,
  setOpenSizeModal: PropTypes.func,
}

export default SelectSizeModal