import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Style from './Style.jsx';
import StarRatings from 'react-star-ratings';
import RatingsStarRating from '../ReviewComponents/RatingsStarRating.jsx'

import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'
import {Title, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

const StyleContainer = styled(ColumnContainer)`
  height: 100%;
`
const RatingsHeader = styled(RowContainer)`
  align-items: flex-end;
  font-size: 20px;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-bottom: 10px;
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
const StyleThumbnails = styled(RowContainer)`
  flex-wrap: wrap;
  justify-content: flex-start;
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
    <StyleContainer border = {false} >
      <StyleSelectorDescription >

        <AlignmentWrapper>
          <RatingsHeader border = {true} >
            <Title primary = {true}>{props.rating}</Title>
            <RatingsStarRating rating = {props.rating}/>
            <ReviewSlider
              primary = {true}
              border = {true}
              onClick = {() => {props.scrollToReviews()}}
              href="#reviews"
              >read all reviews</ReviewSlider>
          </RatingsHeader>
        </AlignmentWrapper>

        <AlignmentWrapper>
          <Header2>{props.category} - {props.name} </Header2>
        </AlignmentWrapper>

        <AlignmentWrapper>
          <PriceContainer >
            {sale_price ? <Header2 ><span style={{textDecorationLine: 'line-through'}}>{`$${original_price}`}</span><span style={{color: 'red'}}>{` SALE $${sale_price}`}</span></Header2> : <Header2>{`$${original_price}`}</Header2>}
          </PriceContainer>
        </AlignmentWrapper>
      </StyleSelectorDescription>

      <AlignmentWrapper>
        <ColumnContainer >
          <StyleNameContaner underline = {true}>
            <Header2>Style &gt; {name}</Header2>
          </StyleNameContaner>
          <StyleThumbnails>
            {props.styles.map(style => {
              return <Style
              selected = {style.style_id === props.selectedStyle.style_id}
              // selected = {props.selectedStyle.style_id}
              key = {style.name}
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