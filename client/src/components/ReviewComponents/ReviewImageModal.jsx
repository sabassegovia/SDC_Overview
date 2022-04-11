import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

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
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
  color: #000;
  position: relative;
  border-radius: 5px;
`;

const ModalImg = styled.img`
  max-height: 500px;
  max-width: 400px;
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

const ReviewImageModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

ReviewImageModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  // children: PropTypes.isRequired,
}


export default ReviewImageModal;