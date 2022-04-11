import React from 'react';
import PropTypes from 'prop-types';
import { FcOk } from 'react-icons/fc';
import moment from 'moment';
import Typography from 'react-styled-typography';
import ReviewTileStarRating from './ReviewTileStarRating.jsx';
import {ReviewTop, AlignmentWrapper, InnerReviewsContainer, UserMoment, RowContainer} from '../../styles/Boxes.jsx';
import {Title, Header2, Header3, Header4, Text, Span} from '../../styles/Headers.jsx'
import axios from 'axios';
import {Axios} from "../../AxiosConfig.js";
import {Button} from '../../styles/Buttons.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: '',
      showImage: false
    }
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
  }

  onHelpfulClick(event) {
    event.preventDefault();
    Axios.put(`/reviews/${this.props.review.review_id}/helpful`)
    .then(result => {console.log(result); this.props.getReviews();})
    .catch(err => {console.log(err)})
  }

  onReportClick(event) {
    event.preventDefault();
    Axios.put(`/reviews/${this.props.review.review_id}/report`)
    .then(result => {console.log(result); this.props.getReviews();})
    .catch(err => {console.log(err)})
  }

  render() {

    // let reviewbody;
    // if (this.props.review.body.length <= 250) {
    //   reviewbody = <Text>{this.props.review.body}</Text>
    // } else {
    //   reviewbody =
    //   (
    //   <Text>
    //     {this.props.review.body.substring(0, 249)}
    //     <button>show more</button>
    //   </Text>
    //   );
    // }
    let images = (
      this.props.review.photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.id} width="20%" height="15%"/>
        </div>
      ))
    )

    let recommend;

    if (this.props.review.recommend) {
      recommend =
      <RowContainer>
        <Text>I recommend this product </Text>
        <FcOk></FcOk>
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

            <Text>
              {this.props.review.body}
              {/* {reviewbody} */}
            </Text>
            {images}
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
                  &:hover {
                    transition-duration: .3s;
                    transform: scale(1.05);
                    cursor: pointer;
                  }
                  `}
              underline="true">Helpful? <tag onClick={this.onHelpfulClick}>Yes</tag> ({this.props.review.helpfulness}) No (0)</Typography>
            </div>
            <div>
              <Typography
                variant="h2"
                css={`
                  color: #989898;
                  font-size: 12px;
                  line-height: 16px;
                  transition: all 0s ease 0s;
                  height: 16px;
                  width: 200px;
                  display: block;
                  box-sizing: border-box;
                  &:hover {
                    transition-duration: .3s;
                    transform: scale(1.05);
                    cursor: pointer;
                  }
                  `} underline="true"
              onClick={this.onReportClick}>Report</Typography>
            </div>
          </InnerReviewsContainer>
        </AlignmentWrapper>
      </React.Fragment>


    );
  }
};

ReviewTile.propTypes = {
  review: PropTypes.object.isRequired,
  getReviews: PropTypes.func.isRequired,
}

export default ReviewTile;