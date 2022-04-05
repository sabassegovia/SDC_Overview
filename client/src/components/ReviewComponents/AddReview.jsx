import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import Button from '../../styles/Buttons.jsx';
import {Title, Wrapper, Header2} from '../../styles/Headers.jsx';
import {Form, Label, Input} from '../../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox} from '../../styles/Boxes.jsx';

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
        <BigBox>
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
            <Label>Characteristics<Input placeholder="type here..."></Input></Label>
            <Label>Summary<Input placeholder="type here..."></Input></Label>
            <Label>Review Body<Input placeholder="type here..."></Input></Label>
            <Label>Upload your photos<Input placeholder="type here..."></Input></Label>
            <Label>Nickname<Input placeholder=" ex. JohnDoe"></Input></Label>
            <Label>e-mail<Input placeholder=" ex. johndoe@gmail.com"></Input></Label>
            <Label>Submit your review button<Input placeholder="type here..."></Input></Label>

            <Button>Submit</Button>
          </Form>
        </div>
        </BigBox>
      </div>
    );
  }
}

export default AddReview;



