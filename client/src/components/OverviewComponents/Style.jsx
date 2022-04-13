import React from 'react';
import PropTypes from 'prop-types'
import { FcOk } from 'react-icons/fc';
import styled from 'styled-components';
import {ColumnContainer, RowContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'

const ThumbnailContainer = styled(ColumnContainer)`
  display:flex;
  position: relative;
  border-top: none;
  border-right: none;
  border-left: none;
`
const Thumbnail = styled.div`
border-radius: 50%;
cursor: pointer;
${({selected}) => selected && `transform: scale(1.1)`};
&:hover {
  transition-duration: .3s;
  transform: scale(1.1);
};
width:80px;
height:80px;
`
const ThumbnailImage = styled.img`
border-radius: 50%;
width:80px;
height:80px;
object-fit: cover;
border: ${({selected}) => { return selected ? `2px solid green` : `2px solid #3e3e3e` }};
transition: border .3s linear;
/* background: url(${(props) => props.url}) center; */

`

// const StyleThumbnail = styled.div`
// position: relative
// width: 100%;


// `
const FcOkActive = styled(FcOk)`
  position:absolute;
  top:0px;
  right:4px;
  z-index: 2;
  height: 20px;
  width: 20px;
`
const Style = (props) => {
  var {photos, name, original_price, sale_price, style_id} = props.style

  return (
    <ThumbnailContainer border = {false}>
      {/* <StyleThumbnail> */}
        {props.selected ? <FcOkActive/>:null}
        <Thumbnail
          onClick = {() => {props.styleOnClick(props.style)}}>
            <ThumbnailImage

            src = {photos[0].url || "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640" }
            selected = {props.selected}>
            </ThumbnailImage>
        </Thumbnail>

      {/* </StyleThumbnail> */}
    </ThumbnailContainer>
  )
}
Style.propTypes = {
  style: PropTypes.object,
  styleOnClick: PropTypes.func,
  selected: PropTypes.bool,
}

export default Style;