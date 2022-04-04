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
import PropTypes from 'prop-types';

const ReviewBox = styled(BigBox)`
  height: 250px;
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
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="black"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="0.5px"
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



        </div>
    );


  };
}

Ratings.propTypes = {
  product_id: PropTypes.number.isRequired,
  handleRating: PropTypes.func.isRequired
}



export default Ratings;