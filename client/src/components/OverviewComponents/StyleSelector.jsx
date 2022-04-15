import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Style from './Style.jsx';
import StarRatings from 'react-star-ratings';
import RatingsStarRating from '../ReviewComponents/RatingsStarRating.jsx'

import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'
import {Title, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

const StyleContainer = styled(ColumnContainer)`
  height: 100%;
  border-right: none;
  border-left: none;
  border-bottom:none;
`
const RatingsHeader = styled(RowContainer)`
  align-items: flex-end;
  column-gap: 10px;
  font-size: 20px;
  border-top: none;
  border-right: none;
  border-left: none;
  padding-bottom: 10px;

`
const ReviewSlider = styled(Header4)`
  cursor: pointer;
  &&:hover {
    transition-duration: .3s;
    background:#e4e4e4;
    color: #3e3e3e;
    transform: scale(1.1);
  };
`

const ProductCategoryName = styled(Header2)`

`
const StyleThumbnails = styled(RowContainer)`
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`
const PriceContainer = styled(RowContainer)`
`
const StyleSelectorDescription = styled(ColumnContainer)`
  margin-bottom: 20px;
`
const StyleNameContaner = styled(RowContainer)`
  width:100%;
  padding-bottom: 20px;
  `

const StyleSelector = (props) => {
  var {original_price, sale_price, name, style_id} = props.selectedStyle

  return (
    <StyleContainer border = {true}  >
      <StyleSelectorDescription >

        <AlignmentWrapper>
          <RatingsHeader border = {true} >
            <Title primary = {true}>{props.rating}</Title>

            <RatingsStarRating rating = {props.rating} />
            <ReviewSlider
              primary = {true}
              border = {true}
              onClick = {() => {props.scrollToReviews()}}
              href="#reviews"
              >read all reviews</ReviewSlider>
          </RatingsHeader>
        </AlignmentWrapper>

        <AlignmentWrapper>
          <ProductCategoryName>{props.category} - {props.name} </ProductCategoryName>
        </AlignmentWrapper>

        <AlignmentWrapper>
          <PriceContainer >
            {sale_price ? <Header3 ><span style={{color: 'red'}}>{`$${sale_price}`}</span>  <span style={{textDecorationLine: 'line-through'}}>{`$${original_price}`}</span></Header3> : <Header3>{`$${original_price}`}</Header3>}
          </PriceContainer>
        </AlignmentWrapper>
      </StyleSelectorDescription>

      <AlignmentWrapper>
        <ColumnContainer >
          <StyleNameContaner underline = {true}>
            <Header2>Style &gt; {name}</Header2>
          </StyleNameContaner>
          <StyleThumbnails>
            {props.styles.map((style, index) => {
              return <Style
              selected = {style.style_id === props.selectedStyle.style_id}
              // selected = {props.selectedStyle.style_id}
              key = {style.style_id + index}
              style = {style}
              styleOnClick = {props.styleOnClick}
              />
            })}
          </StyleThumbnails>
        </ColumnContainer>
      </AlignmentWrapper>

    </StyleContainer>
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