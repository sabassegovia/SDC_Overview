import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FcOk } from 'react-icons/fc';
import moment from 'moment';
// import Typography from 'react-styled-typography';
import ReviewTileStarRating from './ReviewTileStarRating.jsx';
import {ReviewTop, AlignmentWrapper, InnerReviewsContainer, UserMoment, RowContainer, ReviewImages} from '../../styles/Boxes.jsx';
import {Title, Header2, Header3, Header4, Text, Span, Typography} from '../../styles/Headers.jsx'
import axios from 'axios';
import {Axios} from "../../AxiosConfig.js";
import {Button} from '../../styles/Buttons.jsx';
import ReviewImageModal from './ReviewImageModal.jsx';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: '',
      showImage: false,
      modalImage: ''
    }
    this.onImageClick = this.onImageClick.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.onImageKeyDown = this.onImageKeyDown.bind(this);
  }

  onImageClick(event) {
    event.preventDefault();
    console.log(event.target.src);
    this.setState({showImage: true, modalImage: event.target.src});
  }
  onImageKeyDown(event) {
    event.preventDefault();
    if(event.keyCode === 13) {
      this.onImageClick();
    }
  }

  hideModal(event) {
    event.preventDefault();
    this.setState({showImage: false})
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

    let images;
    if (this.props.review.photos.length === 0) {
      images = <div></div>
    } else {
    images = (
      <ReviewImages>
      {this.props.review.photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.id} onClick={this.onImageClick} onKeyDown={this.onImageKeyDown} width="80%" height="100%" className="reviewImage" role="presentation"/>
        </div>
      ))}
      </ReviewImages>
    )
    }

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
            </Text>

            {images}
            {this.state.showImage ? <ReviewImageModal show={this.state.showImage} handleClose={this.hideModal} img={this.state.modalImage}/> : null}

            {recommend}
            <div>
              <Typography underline="true">Helpful? <span role = "presentation" onClick={this.onHelpfulClick}>Yes</span> ({this.props.review.helpfulness}) No (0)</Typography>
            </div>
            <div>
              <Typography underline="true" onClick={this.onReportClick}> Report
              </Typography>
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