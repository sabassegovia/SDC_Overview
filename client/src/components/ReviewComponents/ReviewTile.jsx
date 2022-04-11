import React from 'react';
import PropTypes from 'prop-types';
import { FcOk } from 'react-icons/fc';
import moment from 'moment';
import Typography from 'react-styled-typography';
import ReviewTileStarRating from './ReviewTileStarRating.jsx';
import {ReviewTop, AlignmentWrapper, InnerReviewsContainer, UserMoment, RowContainer} from '../../styles/Boxes.jsx';
import {Title, Header2, Header3, Header4, Text, Span} from '../../styles/Headers.jsx'

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
      <RowContainer>
        <Text>I recommend this product </Text>
        <FcOk/>
      </RowContainer>
    } else {
      recommend = ''
    }

    return (
      <React.Fragment>
        <AlignmentWrapper>
          <InnerReviewsContainer>
            <ReviewTop>
            <ReviewTileStarRating rating={this.props.review.rating}/>

              <UserMoment>
                <Header3>
                  @{this.props.review.reviewer_name}
                </Header3>
                <Header3>
                  {moment(this.props.review.date).format("MMM Do YYYY")}
                </Header3>
              </UserMoment>
            </ReviewTop>


            <Header2>{this.props.review.summary}</Header2>

            <Text>{this.props.review.body}</Text>


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
          </InnerReviewsContainer>
        </AlignmentWrapper>
      </React.Fragment>


    );
  }
};

ReviewTile.propTypes = {
  review: PropTypes.object.isRequired,
}

export default ReviewTile;