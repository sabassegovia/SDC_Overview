import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx'
import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'
import {FaExpand} from 'react-icons/fa'

const CarouselContainer = styled(ColumnContainer)`
  display:flex;
  position: relative;
  justify-content: center;
  max-height: 1000px;
  overflow: hidden;
  width: 100%;
`
const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`
const Arrow = styled.button`
  position: absolute;
  z-index: 3;
  bottom: 18%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 36px;
  background-color: #747474;
  border: 2px solid black;
  opacity: 0.60;
  color: #e4e4e4;
  &&:hover {
    background-color: #5a5a5a;
  };
`
const LeftArrow = styled(Arrow)`
  left: 24px;
`
const RightArrow = styled(Arrow)`
  right: 24px;
`
const CarouselContentWrapper = styled.div`
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`
const ExtraSpace = styled.div`
  display:flex;
  flex-direction: row;
  min-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position:absolute;
  top:0%;
  bottom:0%;

`
const BlurBackground = styled.img`
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  filter:blur(20px);
`
const BlurBackgroundImageContainer = styled.div`
  position:relative;
  overflow:hidden;
  min-width: ;

  height: 150%;
  ${props => props.isRender&&`
    transition: opacity 2s;
  `};
  /* transition: opacity 2s; */
  opacity: ${ props => {if (props.isRender) {
      return 1
    } else {
      return 0
    }
  }};
`
const ModalButton = styled.button`
  position: absolute;
  background: none;
  top: 0%;
  right: 0%;
`
const ImageCarousel = (props) => {
  const {children} = props;
  const [isRender, setIsRender] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // console.log('first effect')
    setIsRender(true)
    setLength(children.length)

    return function cleanup() {
      // console.log('second effect')
      setIsRender(false)
    }
  }, [children, isRender])

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
    // setIsRender(prev => false)
    // setIsRender(prev => true)
  }
  return (
        <React.Fragment>
          <CarouselContainer >
          <CarouselWrapper>
            {!showModal || !props.selectedStyle.photos[currentIndex].url ?<LeftArrow
              disabled = {currentIndex === 0}
              onClick = {prev}>
              &lt;
            </LeftArrow> : null }
            <CarouselContentWrapper>
                <div
                className = "carousel-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)`}}
                >
                  {children.map(child => {
                    return (
                      <BlurBackgroundImageContainer
                        isRender = {isRender}
                        key = {child.props.src}>
                        <BlurBackground src = {child.props.src} alt = "background"/>
                        <ExtraSpace
                          src = {child.props.src} >
                            <img
                          alt = ""
                          onClick = {() => openModal()}
                          className = "carousel-content" src = {child.props.src} />
                        </ExtraSpace>
                      </BlurBackgroundImageContainer>
                    )
                  })}
                </div>
            </CarouselContentWrapper>
            {!showModal || !props.selectedStyle.photos[currentIndex].url ?<RightArrow
              disabled = {currentIndex === length - 1}
              onClick = {next}>
            &gt;
          </RightArrow>:null}
          </CarouselWrapper>
            {!showModal || !props.selectedStyle.photos[currentIndex].url ?

          <Carousel
            selectedStyle = {props.selectedStyle}
            ThumbnailOnClick = {(index) => {ThumbnailOnClick(index)}}
            /> : null }
          {/* <ModalButton
            onClick = {() => {openModal()}}
            ><FaExpand/></ModalButton> */}
            {showModal && props.selectedStyle.photos[currentIndex].url != null ? <Modal
            setShowModal = {setShowModal}
            showModal = {showModal}
            img = {props.selectedStyle.photos[currentIndex].url}
            /> : null}
          </CarouselContainer>
        </React.Fragment>
  )
}
ImageCarousel.propTypes = {
  selectedStyle: PropTypes.object,
  children: PropTypes.array,
}
export default ImageCarousel