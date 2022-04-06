import React from 'react';
import PropTypes from 'prop-types';
import { FcOk } from 'react-icons/fc';
import moment from 'moment';
import { Header2 } from '../../styles/Headers.jsx';
import Typography from 'react-styled-typography';
import ReviewTileStarRating from './ReviewTileStarRating.jsx';
import {ReviewTop} from '../../styles/Boxes.jsx';

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
        <ReviewTop>
        <ReviewTileStarRating rating={this.props.review.rating}/>
        <div>
          @{this.props.review.reviewer_name} {moment(this.props.review.date).format("MMM Do YYYY")}
        </div>

        </ReviewTop>

        <div>
        <Header2>{this.props.review.summary}</Header2>
        </div>
        <div>{this.props.review.body}</div>


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