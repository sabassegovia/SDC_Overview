import React from 'react';
import PropTypes from 'prop-types'
import {Thumbnail, StyleThumbnail} from './OverviewStyles.jsx'

const Style = (props) => {
  var {photos, name, original_price, sale_price, style_id} = props.style

  return (
    <StyleThumbnail>
      <Thumbnail
        url = {photos[0].thumbnail_url}
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