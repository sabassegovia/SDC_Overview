import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

import Button from '../styles/Buttons.jsx';
import {Title, Wrapper, Header2} from '../styles/Headers.jsx';
import {Form, Label, Input} from '../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox} from '../styles/Boxes.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 4.5
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }


  render() {

    const { rating } = this.state;

    return (
      <div>
        <Wrapper>
          <Title>
            Ratings and Reviews
          </Title>
        </Wrapper>
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
          <BigBox>This is a big box
          <DescriptionBox>This is a description box
          <LittleBox>This is a little box</LittleBox>
          </DescriptionBox>
          </BigBox>



        </div>


        <div>
          <div>
            <h3> Ratings and Review </h3>
            <h1>
              {rating}
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </h1>
            <p>80% of reviews recommend this product</p>
          </div>
        </div>
      </div>
    );


  };
}

export default Ratings;