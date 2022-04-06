import React, {useState} from 'react';
import PropTypes from 'prop-types';

const RatingsStarRating = (props) => {
  const rating = props.rating;
  let cssProperties = {};
  cssProperties['--rating'] = rating;

  return (
  <div className="Stars" style={cssProperties}></div>
  );
}

RatingsStarRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default RatingsStarRating;