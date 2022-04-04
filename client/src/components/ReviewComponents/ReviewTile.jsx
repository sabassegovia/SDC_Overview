import React from 'react';
import PropTypes from 'prop-types';
import { FcOk } from 'react-icons/fc';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import { Header2 } from '/Users/minggui/Immersive/FEC/client/src/styles/Headers.jsx';
import Typography from 'react-styled-typography';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: ''
    }
  }

  render() {
    let recommend;

    if (this.props.review.recommend) {
      recommend =
      <div>
        <p>I recommend this product </p>
        <FcOk/>
      </div>
    } else {
      recommend = ''
    }

    return (
      <div>
        <Header2>{this.props.review.summary}</Header2>
        <div>
          <StarRatings
            rating={this.props.review.rating}
            starRatedColor="black"
            numberOfStars={5}
            name='rating'
            starDimension="20px"
            starSpacing="0.5px"
          />
        </div>
        <div>{this.props.review.body}</div>

        <div>
          @{this.props.review.reviewer_name}
          <div>
            {moment(this.props.review.date).format("MMM Do YYYY")}
          </div>
        </div>
        {recommend}
        <div>
          <Typography
            variant="h2"
            css={`
              color: black;
              font-size: 14px;
              line-height: 16px;
              transition: all 0s ease 0s;
              height: 16px;
              width: 200px;
              display: block;
              box-sizing: border-box;
            `}

          >Helpful? Yes ({this.props.review.helpfulness}) No (0)</Typography>

        </div>

      </div>

    );
  }
};

ReviewTile.propTypes = {
  review: PropTypes.object.isRequired,
}

export default ReviewTile;