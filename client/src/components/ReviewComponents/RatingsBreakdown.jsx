import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CharacteristicsContainer} from '../../styles/Boxes.jsx';
import styled from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4, Text, Theme} from '../../styles/Headers.jsx'
import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'

const BreakdownText = styled(Text)`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  line-height: 12px;
  justify-content: space-between;

`;
const OtherRowContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
  position:relative;
`;

const OtherColumnContainer = styled(ColumnContainer)`
  width: 100%;
`;

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
  width: 20%;
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

  const five = ratingsStarBreakdown["5"] || 0 ;
  const four = ratingsStarBreakdown["4"] || 0 ;
  const three = ratingsStarBreakdown["3"] || 0;
  const two = ratingsStarBreakdown["2"] || 0;
  const one = ratingsStarBreakdown["1"] || 0;
  const total = (Number(five) + Number(four) + Number(three) + Number(two) + Number(one));

  const MakeInputFromCharacteristics = (characteristics) => {

    const textdescription = {
      Fit: ["too tight", "perfect", "too loose"],
      Length: ["too short", "perfect" ,"too long"],
      Comfort: ["awkward", "alright" ,"perfect"],
      Quality: ["poor", "average" ,"perfect"],
      Size: ["too small", "perfect" ,"too big"],
      Width: ["too narrow", "perfect" ,"too wide"]
    };

    return Object.keys(characteristics).map(characteristic => {
      return (
        <div key={characteristic}>
          <Characteristic  >
            <CharacteristicName >
              {characteristic}
            </CharacteristicName >
            <OtherColumnContainer >
              <input
                type="range"
                name="quantity"
                min="1"
                max="5"
                disabled={true}
                defaultValue={(characteristics[characteristic].value)}
                key={characteristic}>

              </input>
              <OtherRowContainer>
                <BreakdownText>{textdescription[characteristic][0]}</BreakdownText>
                <BreakdownText>{textdescription[characteristic][1]}</BreakdownText>
                <BreakdownText>{textdescription[characteristic][2]}</BreakdownText>
              </OtherRowContainer>
            </OtherColumnContainer>
          </Characteristic>

        </div>
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
        <CharacteristicContainer >
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

