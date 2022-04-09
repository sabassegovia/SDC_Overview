import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {RowContainer, ColumnContainer} from './OverviewStyles.jsx'
import { TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";

const CarouselContainer = styled(ColumnContainer)`
  /* height: 1000px; */
  /* overflow: hidden; */
  position: absolute;
  z-index: 1;
  top: 0%;
  left: 0%;
`
const ThumbnailBackground = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;

`

const ThumbnailImage = styled.img`
  max-height: 80px;
  max-width: 65px;
  margin: 10px 0px 0px 0px;
  opacity: 70%;
`
const NavButtons = styled.button`
  margin: 10px 0px 0px 0px;
  opacity: 25%;
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
      onClick = {() => prev()}><TiArrowUpThick/></NavButtons>
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
      onClick = {() => next()}><TiArrowDownThick /></NavButtons>
    </CarouselContainer>
    </div>
  )

}

Carousel.propTypes = {
  selectedStyle: PropTypes.object,
  ThumbnailOnClick: PropTypes.func,
}

export default Carousel;