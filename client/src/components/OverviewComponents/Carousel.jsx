import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {RowContainer, ColumnContainer} from '../../styles/Boxes.jsx'
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

const CarouselContainer = styled(RowContainer)`
  /* height: 1000px; */
  /* overflow: hidden; */
  position: absolute;
  justify-content: space-around;
  z-index: 999;
  bottom: 0%;
  right: 50%;
  width: 65px;
`
const ThumbnailBackground = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;

`
const ThumbnailImage = styled.img`
  max-height: 60px;
  max-width: 60px;
  margin: 10px 5px 10px 5px;
  opacity: 100%;
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
    <div>
    <CarouselContainer>
      <NavButtons
      disabled = {current === 0}
      onClick = {() => prev()}><TiArrowLeftThick/></NavButtons>
      {photos.map((photo, index) => {
        if (index <= current + 6 && index >= current) {
          return (
            <ThumbnailBackground key = {index}>
                <ThumbnailImage
                name = {index}
                onClick = {(e) => {handleThumbnailClick(index)}}
                src = {photo} />
            </ThumbnailBackground>
          )}
        }
      )}
      {/* <button onClick = {() => {props.ThumbnailOnClick()}}>test</button> */}
      <NavButtons
      disabled = {current === length - 6}
      onClick = {() => next()}><TiArrowRightThick /></NavButtons>
    </CarouselContainer>
    </div>
  )

}

Carousel.propTypes = {
  selectedStyle: PropTypes.object,
  ThumbnailOnClick: PropTypes.func,
}

export default Carousel;