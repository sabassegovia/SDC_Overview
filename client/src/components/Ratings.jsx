import React from 'react';
import styled, { css } from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

import Button from '../styles/Buttons.jsx';
// import styled from 'styled-components';
import {Title, Wrapper, Header2} from '../styles/Headers.jsx';
import {Form, Label, Input} from '../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox} from '../styles/Boxes.jsx';

import axios from 'axios';
import {Axios} from "../AxiosConfig.js"
import ReviewTile from './ReviewComponents/ReviewTile.jsx';
import PropTypes from 'prop-types';

const ReviewBox = styled(BigBox)`
  height: 250px;
`;

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      rating: 4.5,
      ratings: []
    }
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  componentDidMount() {
    let params = {product_id: this.props.product_id};
    Axios.get(`/reviews/`, {params})
    .then(result => {
      console.log(result.data.results);
      this.setState({
        isMounted: true ,
        ratings: result.data.results
      });
     })
    .catch(err => {console.log(err)})
  }


  render() {

    // const { rating } = this.state;
    // let review;
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
              <DescriptionBox>
            <Header2 > Ratings and Review </Header2>
            <h1>
              {this.state.rating}
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick}
              />
            </h1>
            <p>80% of reviews recommend this product</p>
            </DescriptionBox>
          </div>
        <div>
          <Header2>This is an h2 header</Header2>
          <Form>
            <Label>
              this is a label
              <Input placeholder="type here..."></Input>
            </Label>
            <Button>Submit</Button>
          </Form>
        </div>
        <div>
          <ReviewBox>
            <div>
            <ReviewTile review={this.state.ratings[0]}/>
            </div>

          </ReviewBox>
        </div>
        <div>

        </div>
      </div>

      <section className = "ratings-reviews-container">

          <section className = "ratings-meta-container">

          </section>

          <div className = "reviews-container">
            <nav className = "reviews-header">to sort reviews</nav>
            <section className = "review-container">
              <div>rating</div>
              <div>Summary</div>
              <div>body</div>
              <div>helpful report</div>

            </section>

            <section className = "review-container">
              <div>rating</div>
              <div>Summary</div>
              <div>body</div>
              <div>helpful report</div>

            </section>
          </div>
        </section>
        </div>
    );


  };
}

Ratings.propTypes = {
  product_id: PropTypes.number.isRequired,
}

export default Ratings;