import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import Button from '../../styles/Buttons.jsx';
import {Title, Wrapper, Header2} from '../../styles/Headers.jsx';
import {Form, Label, Input} from '../../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox} from '../../styles/Boxes.jsx';
import styled, { css } from 'styled-components';

const NewReviewBox = styled(BigBox)`
  height: 100%;
  width: 60%;
`;

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: 4
    }
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
                this.setState({rating: nextValue});
  }

  render() {
    return(
      <div>
        <NewReviewBox>
        <div>
          <Header2>Enter Your Review</Header2>
          <Form>
            <Label>Overall rating
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick}
              />
            </Label>
            <Label>Do you recommend this product?<input type="checkbox"/></Label>
            <Label>
              <div>Characteristics
              <div>Size
                <div>
                  A size too small
                  <input type="radio" value="too small"></input>
                  1/2 a size too small
                  <input type="radio" value="1/2 a size too small"></input>
                  Perfect
                  <input type="radio" value="Perfect"></input>
                  1/2 a size too big
                  <input type="radio" value="1/2 a size too big"></input>
                  A size too wide
                  <input type="radio" value="A size too wide"></input>
                </div>
              <div>Width
                <div>
                  Too narrow
                  <input type="radio" value="Too narrow"></input>
                  Slightly narrow
                  <input type="radio" value="Slightly narrow"></input>
                  Perfect
                  <input type="radio" value="Perfect"></input>
                  Slightly wide
                  <input type="radio" value="Slightly wide"></input>
                  Too wide
                  <input type="radio" value="Too wide"></input>
                </div>
              </div>
              <div>Comfort
                <div>
                  Uncomfortable
                  <input type="radio" value="Uncomfortable"></input>
                  Slightly uncomfortable
                  <input type="radio" value="Slightly uncomfortable"></input>
                  Ok
                  <input type="radio" value="Ok"></input>
                  Comfortable
                  <input type="radio" value="Comfortable"></input>
                  Perfect
                  <input type="radio" value="Perfect"></input>
                </div>
              </div>
              <div>Quality
                <div>
                  Poor
                  <input type="radio" value="Poor"></input>
                  Below average
                  <input type="radio" value="Below average"></input>
                  What I expected
                  <input type="radio" value="What I expected"></input>
                  Pretty great
                  <input type="radio" value="Pretty great"></input>
                  Perfect
                  <input type="radio" value="Perfect"></input>
                </div>
              </div>
              <div>Length
                <div>
                  Runs short
                  <input type="radio" value="Runs short"></input>
                  Runs slightly short
                  <input type="radio" value="Runs slightly short"></input>
                  Perfect
                  <input type="radio" value="Perfect"></input>
                  Runs slightly long
                  <input type="radio" value="Runs slightly long"></input>
                  Runs long
                  <input type="radio" value="Runs long"></input>
                </div>
              </div>
              <div>Fit
              <div>
                  Runs tight
                  <input type="radio" value="Runs tight"></input>
                  Runs slightly tight
                  <input type="radio" value="Runs slightly tight"></input>
                  Perfect
                  <input type="radio" value="Perfect"></input>
                  Runs slightly long
                  <input type="radio" value="Runs slightly long"></input>
                  Runs long
                  <input type="radio" value="Runs long"></input>
                </div>
              </div>
              </div>
              </div>
            </Label>
            <Label>Summary<Input placeholder="type here..."></Input></Label>
            <Label>Review Body<Input placeholder="type here..."></Input></Label>
            <Label>Upload your photos<Input placeholder="type here..."></Input></Label>
            <Label>Nickname<Input placeholder=" ex. JohnDoe"></Input></Label>
            <Label>e-mail<Input placeholder=" ex. johndoe@gmail.com"></Input></Label>
            <Button>Submit</Button>
          </Form>
        </div>
        </NewReviewBox>
      </div>
    );
  }
}

export default AddReview;



