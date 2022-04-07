import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {RowContainer, ColumnContainer} from './OverviewStyles.jsx'
import { TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";

const CarouselContainer = styled(ColumnContainer)`
  height: 1000px;
  overflow: hidden;
  justify-content: flex-start;
  position: absolute;
  z-index: 1;
  top: 0%;
  left: 0%;

`
const ThumbnailImage = styled.img`
  height: 60px;
  width: 60px;
  margin: 10px 0px 0px 0px;
  opacity: 60%;
`
const NavButtons = styled.button`
  margin: 10px 0px 0px 0px;
  opacity: 25%;


`
// const Arrow = styled.button`
//   position: relative;
//   z-index: 1;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 48px;
//   height: 48px;
//   border-radius: 24px;
//   background-color: white;
//   border: 1px solid #ddd;
// `
// const LeftArrow = styled(Arrow)`
//   left: 24px;
// `
// const RightArrow = styled(Arrow)`
//   right: 24px;
// `
// const CarouselContentWrapper = styled.div`
//   overflow: hidden;
//   width: 100%;
//   height: 100%;
// `
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
        if (index <= current + 2 && index >= current) {
          return (
          <ThumbnailImage
          key = {index}
          name = {index}
          onClick = {(e) => {handleThumbnailClick(index)}}
          src = {photo} />
          )}
        }
      )}
      {/* <button onClick = {() => {props.ThumbnailOnClick()}}>test</button> */}
      <NavButtons
      disabled = {current === 3}
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