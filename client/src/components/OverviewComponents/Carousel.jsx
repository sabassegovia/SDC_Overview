import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {RowContainer, ColumnContainer} from '../../styles/Boxes.jsx'
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";


const CarouselFooter = styled(RowContainer)`
  position: absolute;
  justify-content: space-between;
  z-index: 3;
  bottom: 0%;
  bottom: 10px;

`

const CarouselContainer = styled(RowContainer)`
  /* height: 1000px; */
  /* overflow: hidden; */
  position: relative;
  justify-content: space-around;
  z-index: 999;
  height: 65px;
  column-gap: 10px;
  align-items: center;
  /* &:hover {
    transition-duration: .3s;
    transform: scale(1.05)
  }; */
`

const ThumbnailBackground = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  /* &:hover {
    transition-duration: .3s;
    transform: scale(1.1)
  }; */
`
const ThumbnailImage = styled.img`
  height: 65px;
  max-width: 65px;
  border-radius:10%;
  border: 1px solid black;
  object-fit: cover;
`
const NavButtons = styled.button`
  opacity: 1;
  border: 1px solid black;
  border-radius: 12px;
  height: 50%;
  top: 50%;
`
const Carousel = (props) => {

  var photos = props.selectedStyle.photos.map(photo => {
    return photo.thumbnail_url
  })
  const [current, setCurrent] = useState(0)
  const length = photos.length

  const next = () => {
    setCurrent(current => length <= 7 ? current : current === length - 7 ? current : current + 1)
  }
  const prev = () => {
    setCurrent(current => current === 0 ? 0 : current - 1)
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
                  role="presentation"
                  alt=""
                  name = {index}
                  onClick = {(e) => {handleThumbnailClick(index)}}
                  src = {photo} />
              </ThumbnailBackground>
            )
          }

          }
        )}
        <NavButtons
        disabled = {current === length - 7 || length <= 7}
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