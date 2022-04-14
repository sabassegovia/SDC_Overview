import React from 'react';
import styled, { css } from 'styled-components';

// import Button from '../styles/Buttons.jsx';
// import styled from 'styled-components';
import {Form, Label, Input, Select} from '../styles/Forms.jsx';
import {DescriptionBox, EmptyBox, BigBox, LittleBox, ReviewBox, ReviewsContainer, BreakdownBox, ReallyBigBox} from '../styles/Boxes.jsx';

import axios from 'axios';
import {Axios} from "../AxiosConfig.js"
import ReviewTile from './ReviewComponents/ReviewTile.jsx';
import AddReview from './ReviewComponents/AddReview.jsx';
import RatingsStarRating from './ReviewComponents/RatingsStarRating.jsx';
import RatingsBreakdown from './ReviewComponents/RatingsBreakdown.jsx';

import PropTypes from 'prop-types';
import {RowContainer, ColumnContainer, AlignmentWrapper, BreakDownAlignment, MainHeader, RatingsReviewContainer} from '../styles/Boxes.jsx'
import {Title, Wrapper, Header2, Header3, Span, Header4, Text} from '../styles/Headers.jsx';

const AddSubmitButton = styled.button`
  width: 30%;
  height: 40px;
  background: #E4E4E4;
  color:  #3E3E3E;
  border-radius: 10px;
  &:hover {
    transition-duration: .3s;
    transform: scale(1.1);
    background: #3E3E3E;
    color: #E4E4E4;
  };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
  padding: 10px;
  border: 1px solid #000;
`

const ReviewSelect = styled(Select)`
  height: 40px;
  background: #FAFAFA;
  border: 2px solid #AFA9A9;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin: 0 10px 0 0 ;
  border-radius: 12px;
`

const SortHeader = styled(RowContainer)`
  column-gap: 20px;
  align-items: center;
`

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null,
      isMounted: false,
      rating: 0,
      reviews: [],
      count: 2,
      ratings: {},
      // viewMoreReviews: false,
      recommendedRatio: 0,
      characteristics: {},
      showAddReview: false
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.hideReviewModal = this.hideReviewModal.bind(this);
  }

  hideReviewModal(event) {
    event.preventDefault();
    this.setState({showAddReview: false});
  }

  handleMoreReviews(event) {
    event.preventDefault();
    let newCount = this.state.count + 2;
    this.setState({count: newCount}, () => {this.getReviews();})
  }

  handleAddReview(event) {
    event.preventDefault();
    this.setState({showAddReview: true});
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
    let params = { product_id: this.props.product_id, sort: event.target.value };
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
              product_id: Number(result.data.product_id),
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

    let AddReviewForm;
    if (this.state.showAddReview) {
      AddReviewForm = (<AddReview characteristics={this.state.characteristics}
      product_id ={this.state.product_id } handleClose={this.hideReviewModal}/>)
    } else {
      AddReviewForm = <div></div>
    }

    const ratingPercent = this.state.recommendedRatio * 100;

    let ReviewTiles = (this.state.reviews.map((review, i) => (
      <AlignmentWrapper key={i}>
        <ReviewBox >
          <ReviewTile review={review} getReviews={this.getReviews} />
        </ReviewBox>
      </AlignmentWrapper>)));
    if (!this.state.isMounted) {
      return <div></div>
    }

    return (

      <RatingsReviewContainer >
        <MainHeader >
          <AlignmentWrapper>
            <Header2 secondary = {true} underline = {true}>
              Ratings &amp; Reviews
            </Header2>
          </AlignmentWrapper>
        </MainHeader>
        <ReallyBigBox >
          <EmptyBox/>

          <AlignmentWrapper>
          <BreakdownBox >
              <Header2 > RATINGS </Header2>
              <Header2>
                {this.state.rating}
                < RatingsStarRating rating={this.state.rating} />
              </Header2>
              <Text underline = {true} >{ratingPercent}% of reviews recommend this product</Text>
              <Header2><Text>Rating Breakdown</Text></Header2>
              <RatingsBreakdown
                ratingsStarBreakdown={this.state.ratings}
                characteristics={this.state.characteristics} />
          </BreakdownBox>
        </AlignmentWrapper>

        <ReviewsContainer>
          <AlignmentWrapper>
            <SortHeader>
              <Header2>Sort on:</Header2>
              <ReviewSelect className="selectNative js-selectNative" onChange={this.handleSort}>
                <option >select</option>
                <option value="newest">newest</option>
                <option value="helpful">helpful</option>
                <option value="relevent">relevant</option>
              </ReviewSelect>
            </SortHeader>
          </AlignmentWrapper>

            {ReviewTiles}

          <AlignmentWrapper>
            <AddSubmitButton as="a" href="#" onClick={this.handleMoreReviews}>More Reviews</AddSubmitButton>
            <AddSubmitButton as="a" href="#" onClick={this.handleAddReview}>Add a Review</AddSubmitButton>
          </AlignmentWrapper>
        </ReviewsContainer>
        <EmptyBox/>
        </ReallyBigBox>
        {AddReviewForm}
      </RatingsReviewContainer>
    );

  };
}

Ratings.propTypes = {
  product_id: PropTypes.number.isRequired,
  handleRating: PropTypes.func.isRequired
}



export default Ratings;