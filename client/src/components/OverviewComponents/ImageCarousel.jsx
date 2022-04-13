import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx'
import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'
import {FaExpand} from 'react-icons/fa'

const CarouselContainer = styled(RowContainer)`
  position: relative;
  justify-content: center;
  height: 800px;
  width: 100%;

`
const CarouselWrapper = styled.div`
  display:flex;
  width: 100%;
  position:relative;
  overflow:hidden;
`

const CarouselContentWrapper = styled(RowContainer)`
  position:relative;
  width:1000px;
  height:800px;
  transition: all 250ms linear;


`
const CarouselContent = styled(ColumnContainer)`
  height: 100%;
  width: 100%;
  opacity: ${(props) => {props.visible }};
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
const BlurBackground = styled.img`
  height:800px;
  width:1000px;
  filter:blur(20px);
  position:absolute;
  top:0;
`
const BlurBackgroundImageContainer = styled(RowContainer)`
  position:absolute
  height:800px;
  width:1000px;

`
const ModalButton = styled.button`
  position: absolute;
  background: none;
  top: 0%;
  right: 0%;
`
const CurrentCarouselImageContainer = styled(ColumnContainer)`
/* position: absolute; */
justify-content:center;
align-items:center;
height:800px;
width:1000px;
/* top:0;
right:0; */
/* left:0; */
/* bottom:0; */
img {
  max-height: 800px;
  max-width: 1000px;
  /* object-fit:contain; */
  /* position: absolute; */
  z-index: 2;


}
`
// const CurrentCarouselImagePicture = styled.div`
//   background-image: url(${(props) => props.url});
// `
const ImageCarousel = (props) => {
  const {children} = props;
  // const [isRender, setIsRender] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(props.selectedStyle.photos[currentIndex].url)
    // setIsRender(true)
    setLength(children.length)

    return function cleanup() {
      // console.log('second effect')
      // setIsRender(false)
    }
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
    // setIsRender(prev => false)
    // setIsRender(prev => true)
  }
  return (
    <React.Fragment>
      <CarouselContainer >
        <CarouselWrapper>
        <CarouselContentWrapper style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
          {props.selectedStyle.photos.map((photo, index) => {
            return (
              // <CurrentCarouselImageContainer opacitiy = {currentIndex === index ? 1: 0}>
              //     <div>{index}</div>
              // </CurrentCarouselImageContainer>
              <CarouselContent
                onClick = {() => {openModal()}}
                key = {JSON.stringify(photo)}>
                  <CurrentCarouselImageContainer
                    key = {index}>
                    <img src = {photo.url || "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"}  alt = "placeholder"/>
                  </CurrentCarouselImageContainer>
                  <BlurBackgroundImageContainer>
                    <BlurBackground src = {photo.url} alt = "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"/>
                  </BlurBackgroundImageContainer>
              </CarouselContent>)})}
        </CarouselContentWrapper>
      </CarouselWrapper>
      {!showModal || !props.selectedStyle.photos[currentIndex].url ?<LeftArrow
          disabled = {currentIndex === 0}
          onClick = {prev}>
          &lt;
        </LeftArrow> : null }
      {!showModal || !props.selectedStyle.photos[currentIndex].url ?<RightArrow
        disabled = {currentIndex === length - 1}
        onClick = {next}>
          &gt;
        </RightArrow>:null}

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

{/* <CarouselWrapper>
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
</CarouselWrapper> */}