import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CharacteristicsContainer} from '../../styles/Boxes.jsx';
import styled from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4, Text, Theme} from '../../styles/Headers.jsx'
import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'

const CharContainer = styled(CharacteristicsContainer)`
  width: 100%;
  border: none;
`;

const RatingsTallyContainer = styled(ColumnContainer)`
  gap: 10px;
`
const TallyCharacteristicsContainer = styled(ColumnContainer)`
  gap: 10px;
`
const CharacteristicName = styled(Header4)`
  width: 15%;
  padding: 10px 0 10px 0;
  border-left: none;
  border-top: none;
  border-bottom: none;
  border-width: 1px;
`
const Characteristic = styled(RowContainer)`
  column-gap: 10px;

`

const CharacteristicContainer = styled(ColumnContainer)`
  border-left: none;
  border-bottom: none;
  padding: 0 15px 0 0;
`

const RatingsBreakdown = ({ratingsStarBreakdown, characteristics}) => {

  const five = ratingsStarBreakdown["5"];
  const four = ratingsStarBreakdown["4"];
  const three = ratingsStarBreakdown["3"];
  const two = ratingsStarBreakdown["2"];
  const one = ratingsStarBreakdown["1"];
  const total = (Number(five) + Number(four) + Number(three) + Number(two) + Number(one));

  const MakeInputFromCharacteristics = (characteristics) => {

    return Object.keys(characteristics).map(characteristic => {
      // console.log(characteristic, characteristics[characteristic].value)
      return (

        <Characteristic key={characteristic} >
          <CharacteristicName border = {true}>
            {characteristic}
          </CharacteristicName >
          <input
            type="range"
            name="quantity"
            min="1"
            max="100"
            defaultValue={(characteristics[characteristic].value) / 5 * 100}
            key={characteristic}>
          </input>
        </Characteristic>
      );
    })
  }
  return (
    <TallyCharacteristicsContainer>
      <RatingsTallyContainer>
        <Text>5 Stars <progress max="100" value={five / total * 100}></progress> {five} reviews</Text>
        <Text>4 Stars <progress max="100" value={four / total * 100}></progress> {four} reviews</Text>
        <Text>3 Stars <progress max="100" value={three / total * 100}></progress> {three} reviews</Text>
        <Text>2 Stars <progress max="100" value={two / total * 100}></progress> {two} reviews</Text>
        <Text>1 Stars <progress max="100" value={one / total * 100}></progress> {one} reviews</Text>
      </RatingsTallyContainer>
        <Header3>Characteristics</Header3>
      <CharContainer>
        <CharacteristicContainer border = {true}>
          {MakeInputFromCharacteristics(characteristics)}
        </CharacteristicContainer>
      </CharContainer>

    </TallyCharacteristicsContainer>
  )
}

RatingsBreakdown.propTypes = {
  ratingsStarBreakdown: PropTypes.object.isRequired,
  characteristics: PropTypes.object.isRequired,
}

export default RatingsBreakdown;

