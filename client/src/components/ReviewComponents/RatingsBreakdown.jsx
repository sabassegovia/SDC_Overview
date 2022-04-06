import React, {useState} from 'react';
import PropTypes from 'prop-types';

const RatingsBreakdown = ({ratingsStarBreakdown}) => {

  const five = ratingsStarBreakdown.five;
  const four = ratingsStarBreakdown.four;
  const three = ratingsStarBreakdown.three;
  const two = ratingsStarBreakdown.two;
  const one = ratingsStarBreakdown.one;
  return (
    <div>
      <p>5 Stars <progress max="100" value={five / 5 * 100}></progress> {five} reviews</p>
      <p>4 Stars <progress max="100" value={four / 5 * 100}></progress> {four} reviews</p>
      <p>3 Stars <progress max="100" value={three / 5 * 100}></progress> {three} reviews</p>
      <p>2 Stars <progress max="100" value={two / 5 * 100}></progress> {two} reviews</p>
      <p>1 Stars <progress max="100" value={one / 5 * 100}></progress> {one} reviews</p>
    </div>
  )
}

RatingsBreakdown.propTypes = {
  ratingsStarBreakdown: PropTypes.object.isRequired,
}

export default RatingsBreakdown;