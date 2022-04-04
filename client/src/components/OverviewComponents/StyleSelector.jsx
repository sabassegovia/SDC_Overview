import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Style from './Style.jsx';
import StarRatings from 'react-star-ratings';

import {StyleHeader, RowContainer, RatingsHeader, StyleThumbnails} from './OverviewStyles.jsx'

const StyleSelector = (props) => {

  var {original_price, sale_price, name} = props.selectedStyle
  return (
    <StyleHeader>
      {/* will need aratings component */}
      <RatingsHeader>
        <StarRatings
            rating={props.rating}
            starRatedColor="black"
            numberOfStars={5}
            name='rating'
            starDimension="20px"
            starSpacing="0.5px"
          />
        <a
          onClick = {() => {props.scrollToReviews()}}
          href="#reviews"
          >read all reviews</a>
      </RatingsHeader>
      <h3>{props.category} - {props.name} </h3>
      {sale_price ? <h3><span style={{textDecorationLine: 'line-through'}}>{`$${original_price}`}</span><span style={{color: 'red'}}>{`- SALE $${sale_price}`}</span></h3> : <h3>{`$${original_price}`}</h3>}
      <section className = "style-selection" >
          <h2>Style - {name}</h2>
          <StyleThumbnails>
            {props.styles.map(style => {
              return <Style
                key = {style.name}
                style = {style}
                styleOnClick = {props.styleOnClick}
                />
            })}

          </StyleThumbnails>
      </section>
    </StyleHeader>
  );
}

StyleSelector.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  styles: PropTypes.array,
  id: PropTypes.number,
  styleOnClick: PropTypes.func,
  selectedStyle: PropTypes.object,
  rating: PropTypes.number,
  scrollToReviews: PropTypes.func,
}

export default StyleSelector;