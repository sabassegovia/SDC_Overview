import React from 'react';
import styled, { css } from 'styled-components';

import StarRatings from 'react-star-ratings';
import Button from '../styles/Buttons.jsx';
// import styled from 'styled-components';
import {Title, Wrapper, Header2} from '../styles/Headers.jsx';
import {Form, Label, Input} from '../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox} from '../styles/Boxes.jsx';

import axios from 'axios';
import {Axios} from "../AxiosConfig.js"
import ReviewTile from './ReviewComponents/ReviewTile.jsx';
import AddReview from './ReviewComponents/AddReview.jsx';
import PropTypes from 'prop-types';
import ProgressBar from "@ramonak/react-progress-bar";

const ReviewBox = styled(BigBox)`
  height: 100%;
  display: inline-block;
`;

const BreakdownBox = styled(DescriptionBox)`
  height: 100%;
  display: inline-block;
`;

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
      ratings: []
    }
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
    const ReviewTiles = this.state.ratings.map((review) => (
      <ReviewBox key={review.length}>
        <ReviewTile review={review} />
      </ReviewBox>
    ))

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
          <div>
            <BreakdownBox>
              <Header2 > Ratings and Review </Header2>
              <h1>
                {this.state.rating}
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="black"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="0.5px"
                />
              </h1>
              <p>{ratingPercent}% of reviews recommend this product</p>
              {/* Star breakdown */}
            <div>
              <p>5 Stars <StarsBar completed={ratingPercent}/></p>
              <p>4 Stars <StarsBar completed={ratingPercent}/></p>
              <p>3 Stars <StarsBar completed={ratingPercent}/></p>
              <p>2 Stars <StarsBar completed={ratingPercent}/></p>
              <p>1 Stars <StarsBar completed={ratingPercent}/></p>
            </div>
          </BreakdownBox>
          <div>
              <div>
                {ReviewTiles}
              </div>
          </div>
          <Button>More Reviews</Button> <Button>Add a Review</Button>
          </div>
          <AddReview/>
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