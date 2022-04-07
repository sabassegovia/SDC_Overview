import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";


const AddReviewStarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;

        return (
          <label key={i} >
            <input
            type="radio"
            name="rating"
            value={ratingVal}
            onClick={() => setRating(ratingVal)}/>
            < FaStar className="star" color={ratingVal <= rating ? "#ffc107" : "#606165"}/>
          </label>
        );
      })}
    </div>
  )
}

export default AddReviewStarRating;