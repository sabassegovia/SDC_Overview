import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

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
position: center;
border-radius: 5px;
border: none;
color: #fffffff0;
height: 60%;
width: 60%;
`;

const ModalImg = styled.img`
height: 50%;
width: 50%;
/* object-fit:contain; */
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
background: #141414;
color: #fff;
border-radius: 50%;
`;

const ReviewImageModal = ({ handleClose, show, img }) => {
  const [isRender, setIsRender] = useState(false)

  useEffect(()=> {
    setIsRender(true)

  });
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <Background isRender = {isRender} onClick={handleClose} role="presentation">
      <ModalWrapper>
      <ModalContent>
        <ModalImg src={img} alt=''/>
        <CloseModalButton
          aria-label="Close modal"
        />
        </ModalContent>
      </ModalWrapper>
    </Background>
  );
};

ReviewImageModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
}


export default ReviewImageModal;