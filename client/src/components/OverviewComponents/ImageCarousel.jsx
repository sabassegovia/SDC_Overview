import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Carousel from './Carousel.jsx'
import {RowContainer, ColumnContainer} from './OverviewStyles.jsx'

const CarouselContainer = styled.main`
  display:flex;
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
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
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
const ImageCarousel = (props) => {
  const {children} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  useEffect(() => {
    setLength(children.length)
  }, [children])
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
            <LeftArrow onClick = {prev}>
              &lt;
            </LeftArrow>
            <CarouselContentWrapper>
              <div
              className = "carousel-content"
              style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                {children}
              </div>
            </CarouselContentWrapper>
            <RightArrow onClick = {next}>
            &gt;
          </RightArrow>
          </CarouselWrapper>
          <Carousel
            selectedStyle = {props.selectedStyle}
            ThumbnailOnClick = {(index) => {ThumbnailOnClick(index)}}
            />
        </CarouselContainer>
  )
}
ImageCarousel.propTypes = {
  selectedStyle: PropTypes.object,
  children: PropTypes.array,
}
export default ImageCarousel