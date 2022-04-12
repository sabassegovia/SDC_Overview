import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {RowContainer, ColumnContainer} from '../../styles/Boxes.jsx'
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";


const CarouselFooter = styled(RowContainer)`
  position: absolute;
  justify-content: space-between;
  z-index: 999;
  bottom: 0%;
`

const CarouselContainer = styled(RowContainer)`
  /* height: 1000px; */
  /* overflow: hidden; */
  position: relative;
  justify-content: space-around;
  z-index: 999;
  width: 65px;
  /* &:hover {
    transition-duration: .3s;
    transform: scale(1.05)
  }; */
`

const ThumbnailBackground = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  &:hover {
    transition-duration: .3s;
    transform: scale(1.1)
  };
`
const ThumbnailImage = styled.img`
  max-height: 65px;
  max-width: 65px;
  border-radius:10%;
  margin: 10px 5px 10px 5px;
  border: 1px solid black;
`
const NavButtons = styled.button`
  margin: 10px 5px 10px 5px;
  opacity: 1;
  border: 1px solid black;
`
const Carousel = (props) => {

  var photos = props.selectedStyle.photos.map(photo => {
    return photo.thumbnail_url
  })
  const [current, setCurrent] = useState(0)
  const length = photos.length

  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }

  const handleThumbnailClick = (index) => {
    props.ThumbnailOnClick(index)
  }
  return (
    <CarouselFooter>
      <CarouselContainer>
        <NavButtons
        disabled = {current === 0}
        onClick = {() => prev()}><TiArrowLeftThick/></NavButtons>
        {photos.map((photo, index) => {
          if (index >= current &&  index < current + 7) {
            return (
              <ThumbnailBackground key = {index}>
                  <ThumbnailImage
                  name = {index}
                  onClick = {(e) => {handleThumbnailClick(index)}}
                  src = {photo} />
              </ThumbnailBackground>
            )
          }

          }
        )}
        <NavButtons
        disabled = {current === length - 7}
        onClick = {() => next()}><TiArrowRightThick /></NavButtons>
      </CarouselContainer>
    </CarouselFooter>

  )

}

Carousel.propTypes = {
  selectedStyle: PropTypes.object,
  ThumbnailOnClick: PropTypes.func,
}

export default Carousel;