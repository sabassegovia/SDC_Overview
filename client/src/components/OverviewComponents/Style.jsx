import React from 'react';
import PropTypes from 'prop-types'
import { FcOk } from 'react-icons/fc';
import styled from 'styled-components';
import {ColumnContainer, RowContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'

const ThumbnailContainer = styled(ColumnContainer)`
  display:flex;
  position: relative;
  padding: 5px;
  width:22%;
  border-top: none;
  border-right: none;
  border-left: none;
`

const Thumbnail = styled.div`
border-radius: 50%;
cursor: pointer;
width: 80px;
height: 80px;
border: ${({selected}) => { return selected ? `3px solid green` : `2px solid #3e3e3e` }};
${({selected}) => selected && `transform: scale(1.1)`};
&:hover {
  transition-duration: .3s;
  color: #3e3e3e;
  transform: scale(1.1);
};
`
const ThumbnailImage = styled.img`
border-radius: 50%;
width:80px;
height:80px;
background: url(${(props) => props.url || `Not Availabe`}) center;
`

const StyleThumbnail = styled.div`
position: relative
width: 100%;
`
const FcOkActive = styled.div`
  position:absolute;
  top:9%;
  right:21%;
`
const Style = (props) => {
  var {photos, name, original_price, sale_price, style_id} = props.style

  return (
    <ThumbnailContainer border = {false}>
      <StyleThumbnail>
        {props.selected ? <FcOkActive><FcOk className = "thumbnail-checked"/></FcOkActive> :null}
        <Thumbnail

          selected = {props.selected}
          onClick = {() => {props.styleOnClick(props.style)}}>
            <ThumbnailImage url = {photos[0].url }>

            </ThumbnailImage>
        </Thumbnail>

      </StyleThumbnail>
    </ThumbnailContainer>
  )
}
Style.propTypes = {
  style: PropTypes.object,
  styleOnClick: PropTypes.func,
  selected: PropTypes.bool,
}

export default Style;