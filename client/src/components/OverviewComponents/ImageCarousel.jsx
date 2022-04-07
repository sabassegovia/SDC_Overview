import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx'
import {RowContainer, ColumnContainer} from './OverviewStyles.jsx'
import {FaExpand} from 'react-icons/fa'

const CarouselContainer = styled.main`
  display:flex;
  position: relative;
  height: 80%;
  justify-content: center;
  width: 100%;
  border: 3px solid #FAFAFA;
  background-color: #FAFAFA;

`
const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`
const Arrow = styled.button`
  position: absolute;
  z-index: 3;
  top: 80%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 36px;
  background-color: #ddd;
  border: 1px solid #0f0f0f;
  opacity: 0.25;
`
const LeftArrow = styled(Arrow)`
  left: 24px;
`
const RightArrow = styled(Arrow)`
  right: 24px;
`
const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const ModalButton = styled.button`
  position: absolute;
  background: none;
  top: 0%;
  right: 0%;
`
const ImageCarousel = (props) => {
  const {children} = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    setLength(children.length)
  }, [children])

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }
  }
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex === 0 ? length - 1: currentIndex - 1)
    }
  }
  const ThumbnailOnClick = (index) => {
    setCurrentIndex(index)
  }

  return (
        <CarouselContainer>
          <CarouselWrapper>
            {!showModal ?<LeftArrow
              disabled = {currentIndex === 0}
              onClick = {prev}>
              &lt;
            </LeftArrow> : null }
            <CarouselContentWrapper>
              <div
              className = "carousel-content"
              style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                {children}

              </div>
            </CarouselContentWrapper>
            {!showModal ?<RightArrow
              disabled = {currentIndex === length - 1}
              onClick = {next}>
            &gt;
          </RightArrow>:null}
          </CarouselWrapper>
          {!showModal ?<Carousel
            selectedStyle = {props.selectedStyle}
            ThumbnailOnClick = {(index) => {ThumbnailOnClick(index)}}
            /> : null }
          <ModalButton
            onClick = {() => {openModal()}}
            ><FaExpand/></ModalButton>
            {showModal ? <Modal
            setShowModal = {setShowModal}
            showModal = {showModal}
            img = {props.selectedStyle.photos[currentIndex].url}
            /> : null}
        </CarouselContainer>
  )
}
ImageCarousel.propTypes = {
  selectedStyle: PropTypes.object,
  children: PropTypes.array,
}
export default ImageCarousel