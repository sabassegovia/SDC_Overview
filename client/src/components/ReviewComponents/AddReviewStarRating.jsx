import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";
import { Label } from '../../styles/Forms.jsx';
import styled, { css } from 'styled-components';

const StarLabel = styled(Label)`
  display: flex;
  flex-direction: row;
`;
const StarMeaning = styled(Label)`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

const AddReviewStarRating = ({onStarClick}) => {
  const [rating, setRating] = useState(null);

  const starDescription = () => {
    const descriptions = ["Poor", "Fair", "Average", "Good", "Great"];
    return (
      descriptions[rating-1]
    );
  };

  return (
    <StarLabel>
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;

        return (
          <StarLabel key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingVal}
                onClick={() => {setRating(ratingVal); onStarClick(ratingVal)}} />
              < FaStar className="star" color={ratingVal <= rating ? "#ffc107" : "#606165"} />
          </StarLabel>
        );
      })}
      <StarMeaning> {starDescription()} </StarMeaning>
    </StarLabel>
  )
}

AddReviewStarRating.propTypes = {
  onStarClick: PropTypes.func.isRequired,
}

export default AddReviewStarRating;