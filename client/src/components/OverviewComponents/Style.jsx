import React from 'react';
import PropTypes from 'prop-types'
import {Thumbnail, StyleThumbnail} from './OverviewStyles.jsx'
import { FcOk } from 'react-icons/fc';




const Style = (props) => {
  var {photos, name, original_price, sale_price, style_id} = props.style

  return (
    <StyleThumbnail>

      {props.selected? <FcOk className = "thumbnail-checked"/> :null}
      <Thumbnail
        url = {photos[0].url}
        selected = {props.selected}
        onClick = {() => {props.styleOnClick(props.style)}}>
      </Thumbnail>

    </StyleThumbnail>
  )
}

Style.propTypes = {
  style: PropTypes.object,
  styleOnClick: PropTypes.func,
  selected: PropTypes.bool,
}

export default Style;