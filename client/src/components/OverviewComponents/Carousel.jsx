import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {RowContainer, ColumnContainer} from './OverviewStyles.jsx'

const CarouselContainer = styled(ColumnContainer)`
  height: 1000px;
  overflow: hidden;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
`
const ThumbnailImage = styled.img`
  height: 40px;
  width: 40px;
  border: 3px solid #FAFAFA;
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
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prev = () => {
    setCurrent(current === 0 ? length - 1: current - 1)
  }

  return (
    <div>
    <CarouselContainer>
      {photos.map((photo, index) => {
        return (
        <ThumbnailImage
        key = {index}
        name = {index}
        onClick = {(e) => {props.ThumbnailOnClick(index)}}
        src = {photo} />
        )
      })}
      {/* <button onClick = {() => {props.ThumbnailOnClick()}}>test</button> */}
    </CarouselContainer>

    </div>


  )

}

Carousel.propTypes = {
  selectedStyle: PropTypes.object,
  ThumbnailOnClick: PropTypes.func,
}

export default Carousel;