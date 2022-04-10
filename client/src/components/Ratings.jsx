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
      reviews: [],
      count: 2,
      ratings: {},
      // viewMoreReviews: false,
      recommendedRatio: 0,
      characteristics: {}
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleMoreReviews(event) {
    event.preventDefault();
    let newCount = this.state.count + 2;
    this.setState({count: newCount}, () => {this.getReviews();})
  }

  getReviews() {
    let params = { product_id: this.props.product_id, count: this.state.count };
    Axios.get(`/reviews/`, { params })
    .then(result => {
      console.log(result.data);
      this.setState({ reviews: result.data.results});
    })
    .catch(err => {console.log(err)})
  }

  handleSort(event) {
    event.preventDefault();
    console.log(event.target.value);
    let params = { product_id: this.props.product_id, count: this.state.count, sort: event.target.value };
    Axios.get(`/reviews/`, { params })
    .then(result => {
      console.log(result.data);
      this.setState({reviews: result.data.results})
    })
    .catch(err => {console.log(err)});
  }

  componentDidMount() {
    let params = { product_id: this.props.product_id, count: 2 };
    Axios.get(`/reviews/`, { params })
      .then(result => {
        console.log(result.data.results);
        const firstResults = result.data.results;

        Axios.get(`/reviews/meta/`, { params })
          .then(result => {
            console.log(result.data);
            const ratings = Object.values(result.data.ratings).map(x => Number(x));
            let totalratings = ratings.reduce((x, c) => { return (x + c) }, 0);
            let totalweighted = 0;
            for (let key in result.data.ratings) {
              totalweighted = totalweighted + (key * result.data.ratings[key]);
            }
            const productrating = parseFloat(totalweighted / totalratings).toFixed(1);

            this.setState({
              rating: Number(productrating),
              ratings: result.data.ratings,
              recommendedRatio: parseFloat(Number(result.data.recommended.true) / (Number(result.data.recommended.true) + Number(result.data.recommended.false))).toFixed(2),
              characteristics: result.data.characteristics,
              isMounted: true,
            }, () => {this.props.handleRating(this.state.rating)})
          })
          .catch(err => { console.log(err) });
        this.setState({

          reviews: result.data.results
        }
       );
      })
      .catch(err => { console.log(err) });
  }


  render() {

    // const { rating } = this.state;
    // let review;
    const ratingPercent = this.state.recommendedRatio * 100;

    let ReviewTiles = (this.state.reviews.map((review, i) => (
      <ReviewBox key={i}>
        <ReviewTile review={review} />
      </ReviewBox>)));

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
                <RatingsBreakdown ratingsStarBreakdown={this.state.ratings} characteristics={this.state.characteristics} />
              </div>
            </BreakdownBox>
            <div>
              <ReviewsContainer>
                <Title>
                  Sort on: <select className="selectNative js-selectNative" onChange={this.handleSort}>
                  <option >select</option>
                  <option value="newest">newest</option>
                  <option value="helpful">helpful</option>
                  <option value="relevent">relevant</option>
                </select>
                  </Title>
                {ReviewTiles}
              </ReviewsContainer>
              <Button as="a" href="#" onClick={this.handleMoreReviews}>More Reviews</Button>
            </div>

          </ReallyBigBox>
          <Button>Add a Review</Button>
          <AddReview characteristics={this.state.characteristics} />
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