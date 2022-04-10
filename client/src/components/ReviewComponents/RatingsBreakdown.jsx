import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CharacteristicsContainer} from '../../styles/Boxes.jsx';
import styled from 'styled-components';

const CharContainer = styled(CharacteristicsContainer)`
  width: 100%;
  border: none;
`;

const RatingsBreakdown = ({ratingsStarBreakdown, characteristics}) => {

  const five = ratingsStarBreakdown["5"];
  const four = ratingsStarBreakdown["4"];
  const three = ratingsStarBreakdown["3"];
  const two = ratingsStarBreakdown["2"];
  const one = ratingsStarBreakdown["1"];
  const total = (Number(five) + Number(four) + Number(three) + Number(two) + Number(one));

  const MakeInputFromCharacteristics = (characteristics) => {
    return Object.keys(characteristics).map(characteristic => {
      return (
        <div key={characteristic}>
          {characteristic}
          <input
            type="range"
            name="quantity"
            min="1"
            max="100"
            value={JSON.stringify(characteristics[characteristic].value) / 5 * 100}
            key={characteristic}>
          </input>
        </div>
      );
    })
  }
  return (
    <div>
      <p>5 Stars <progress max="100" value={five / total * 100}></progress> {five} reviews</p>
      <p>4 Stars <progress max="100" value={four / total * 100}></progress> {four} reviews</p>
      <p>3 Stars <progress max="100" value={three / total * 100}></progress> {three} reviews</p>
      <p>2 Stars <progress max="100" value={two / total * 100}></progress> {two} reviews</p>
      <p>1 Stars <progress max="100" value={one / total * 100}></progress> {one} reviews</p>
        Characteristics
      <CharContainer>
        {MakeInputFromCharacteristics(characteristics)}
      </CharContainer>

    </div>
  )
}

RatingsBreakdown.propTypes = {
  ratingsStarBreakdown: PropTypes.object.isRequired,
  characteristics: PropTypes.object.isRequired,
}

export default RatingsBreakdown;