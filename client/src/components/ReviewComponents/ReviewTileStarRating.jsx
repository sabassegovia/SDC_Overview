import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ReviewTileStarRating = (props) => {
  const rating = props.rating;
  let cssProperties = {};
  cssProperties['--ReviewRating'] = rating;

  return (
  <div className="ReviewStars" style={cssProperties} ></div>
  );
}

ReviewTileStarRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default ReviewTileStarRating;