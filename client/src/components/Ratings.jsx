import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../styles/Buttons.jsx';
// import styled from 'styled-components';
import {Title, Wrapper, Header2} from '../styles/Headers.jsx';
import {Form, Label, Input} from '../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox, ReviewBox, ReviewsContainer, BreakdownBox, ReallyBigBox} from '../styles/Boxes.jsx';

import axios from 'axios';
import {Axios} from "../AxiosConfig.js"
import ReviewTile from './ReviewComponents/ReviewTile.jsx';
import AddReview from './ReviewComponents/AddReview.jsx';
import RatingsStarRating from './ReviewComponents/RatingsStarRating.jsx';
import RatingsBreakdown from './ReviewComponents/RatingsBreakdown.jsx';

import PropTypes from 'prop-types';
import ProgressBar from "@ramonak/react-progress-bar";


const StarsBar = styled(ProgressBar)`
  width: 80%;
  display: inline-block;
`;


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      rating: 0,
      ratings: [],
      viewMoreReviews: false
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  handleMoreReviews(event) {
    event.preventDefault();
    this.setState({viewMoreReviews: !this.state.viewMoreReviews});
  }

  componentDidMount() {
    let params = {product_id: this.props.product_id};
    Axios.get(`/reviews/`, {params})
    .then(result => {
      console.log(result.data.results);
      this.setState({
        isMounted: true ,
        ratings: result.data.results,
        rating: parseFloat((result.data.results.reduce((x, c) => {
          return (x + c.rating);
        }, 0) / result.data.count).toFixed(1))
      },
      () => {this.props.handleRating(this.state.rating)}
      );
     })
    .catch(err => {console.log(err)})
  }


  render() {

    // const { rating } = this.state;
    // let review;
    const ratingPercent = (this.state.rating / this.state.ratings.length) * 100;
    const ratingsStarBreakdown = {
      five: this.state.ratings.reduce((x, c) => {if (c.rating === 5) { return (x + 1)} else {return (x + 0)}}, 0),
      four: this.state.ratings.reduce((x, c) => {if (c.rating === 4) { return (x + 1)} else {return (x + 0)}}, 0),
      three: this.state.ratings.reduce((x, c) => {if (c.rating === 3) { return (x + 1)} else {return (x + 0)}}, 0),
      two: this.state.ratings.reduce((x, c) => {if (c.rating === 2) { return (x + 1)} else {return (x + 0)}}, 0),
      one: this.state.ratings.reduce((x, c) => {if (c.rating === 1) { return (x + 1)} else {return (x + 0)}}, 0)
    }

    let ReviewTiles;

    if (this.state.viewMoreReviews) {
      ReviewTiles = this.state.ratings.map((review) => (
        <ReviewBox key={review.length}>
          <ReviewTile review={review} />
        </ReviewBox>
      ))

    } else {
      ReviewTiles = this.state.ratings.slice(0, 2).map((review) => (
        <ReviewBox key={review.length}>
          <ReviewTile review={review} />
        </ReviewBox>
      ))
    }



    if (!this.state.isMounted) {
      return <div></div>
    }

    return (
      <div>
        <div>
          <Wrapper>
            <Title>
              Ratings and Reviews
            </Title>
          </Wrapper>
          <ReallyBigBox>
            <BreakdownBox>
              <Header2 > RATINGS &amp; REVIEWS</Header2>
              <h1>
                {this.state.rating}

                < RatingsStarRating rating={this.state.rating} />
              </h1>
              <p>{ratingPercent}% of reviews recommend this product</p>
              <div>
                <RatingsBreakdown ratingsStarBreakdown={ratingsStarBreakdown} />
              </div>
            </BreakdownBox>
            <div>
              <ReviewsContainer>
                {ReviewTiles}
              </ReviewsContainer>
              <Button as="a" href="#" onClick={this.handleMoreReviews}>More Reviews</Button>
            </div>

          </ReallyBigBox>
          <Button>Add a Review</Button>
          <AddReview />
        </div>
      </div>
    );

  };
}

Ratings.propTypes = {
  product_id: PropTypes.number.isRequired,
  handleRating: PropTypes.func.isRequired
}



export default Ratings;