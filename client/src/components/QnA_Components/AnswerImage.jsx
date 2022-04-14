import React from 'react';
import PropTypes from 'prop-types';

var AnswerImage = (props) => {
  console.log(props.image.url)
  return (
    <img src={props.image.url} alt=""></img>
  );
}

AnswerImage.propTypes = {
  image: PropTypes.string,
  url: PropTypes.string
}

export default AnswerImage;