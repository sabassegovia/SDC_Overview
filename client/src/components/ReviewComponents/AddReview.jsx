import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../styles/Buttons.jsx';
import {Title, Wrapper, Header2} from '../../styles/Headers.jsx';
import {Form, Label, Input} from '../../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox, CharacteristicsContainer, CharacteristicsBox, CharacteristicsButtons, IndividualCharacteristic} from '../../styles/Boxes.jsx';
import styled, { css } from 'styled-components';
import AddReviewStarRating from './AddReviewStarRating.jsx';

const NewReviewBox = styled(BigBox)`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null,
      rating: 0,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    }
    this.onReviewSubmit = this.onReviewSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({characteristics: this.props.characteristics})
  }


  onReviewSubmit(event) {
    event.preventDefault();
  }


  render() {
    return(
      <div>
        <NewReviewBox>
        <div>
          <Header2>Enter Your Review</Header2>
          <Form>
            <Label>Overall rating
              <AddReviewStarRating
                // onStarClick={this.onStarClick}
              />
            </Label>
            <Label>Do you recommend this product?<input type="checkbox"/></Label>
            <Label>
                <CharacteristicsContainer>Characteristics
                  <CharacteristicsBox>
                    Size
                    <CharacteristicsButtons>
                      <input type="radio" name="size" value="1"></input>
                      <input type="radio" name="size" value="2"></input>
                      <input type="radio" name="size" value="3"></input>
                      <input type="radio" name="size" value="4"></input>
                      <input type="radio" name="size" value="5"></input>
                    </CharacteristicsButtons>
                    <IndividualCharacteristic>
                      <p> A size too small </p>
                      <p> 1/2 a size too small </p>
                      <p> Perfect </p>
                      <p> 1/2 a size too big </p>
                      <p> A size too wide </p>
                    </IndividualCharacteristic>
                  </CharacteristicsBox>
                  Width
                  <CharacteristicsBox>
                    <CharacteristicsButtons>
                      <input type="radio" name="width" value="1"></input>
                      <input type="radio" name="width" value="2"></input>
                      <input type="radio" name="width" value="3"></input>
                      <input type="radio" name="width" value="4"></input>
                      <input type="radio" name="width" value="5"></input>
                    </CharacteristicsButtons>
                    <IndividualCharacteristic>
                      <p> Too narrow </p>
                      <p> Slightly narrow </p>
                      <p> Perfect </p>
                      <p> Slightly wide </p>
                      <p> Too wide </p>
                    </IndividualCharacteristic>
                  </CharacteristicsBox>
                  <CharacteristicsBox>
                    Comfort
                    <CharacteristicsButtons>
                      <input type="radio" name="comfort" value="1"></input>
                      <input type="radio" name="comfort" value="2"></input>
                      <input type="radio" name="comfort" value="3"></input>
                      <input type="radio" name="comfort" value="4"></input>
                      <input type="radio" name="comfort" value="5"></input>
                    </CharacteristicsButtons>
                    <IndividualCharacteristic>
                      <p> Uncomfortable </p>
                      <p> Slightly uncomfortable </p>
                      <p> Ok </p>
                      <p> Comfortable </p>
                      <p> Perfect </p>
                    </IndividualCharacteristic>
                  </CharacteristicsBox>
                  <CharacteristicsBox>
                    Quality
                    <CharacteristicsButtons>
                      <input type="radio" name="quality" value="1"></input>
                      <input type="radio" name="quality" value="2"></input>
                      <input type="radio" name="quality" value="3"></input>
                      <input type="radio" name="quality" value="4"></input>
                      <input type="radio" name="quality" value="5"></input>
                    </CharacteristicsButtons>
                    <IndividualCharacteristic>
                      <p> Poor </p>
                      <p> Below average </p>
                      <p> What I expected </p>
                      <p> Pretty great </p>
                      <p> Perfect </p>
                    </IndividualCharacteristic>
                  </CharacteristicsBox>
                  <CharacteristicsBox>
                    Length
                    <CharacteristicsButtons>
                      <input type="radio" name="length" value="1"></input>
                      <input type="radio" name="length" value="2"></input>
                      <input type="radio" name="length" value="3"></input>
                      <input type="radio" name="length" value="4"></input>
                      <input type="radio" name="length" value="5"></input>
                    </CharacteristicsButtons>
                    <IndividualCharacteristic>
                      <p> Runs short </p>
                      <p> Runs slightly short </p>
                      <p> Perfect </p>
                      <p> Runs slightly long </p>
                      <p> Runs long </p>
                    </IndividualCharacteristic>
                  </CharacteristicsBox>
                  <CharacteristicsBox>
                    {/* Fit {JSON.stringify(this.state.characteristics["Fit"])} */}
                    Fit
                    <CharacteristicsButtons>
                      <input type="radio" name="fit" value="1"></input>
                      <input type="radio" name="fit" value="2"></input>
                      <input type="radio" name="fit" value="3"></input>
                      <input type="radio" name="fit" value="4"></input>
                      <input type="radio" name="fit" value="5"></input>
                    </CharacteristicsButtons>
                    <IndividualCharacteristic>
                      <p> Runs tight </p>
                      <p> Runs slightly tight </p>
                      <p> Perfect </p>
                      <p> Runs slightly long </p>
                      <p> Runs long </p>
                    </IndividualCharacteristic>
                  </CharacteristicsBox>

                </CharacteristicsContainer>
              </Label>
            <Label>Summary<Input placeholder="type here..."></Input></Label>
              <Label>Review Body<Input placeholder="type here..."></Input></Label>
              <Label>Upload your photos
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename"></input>
                    <input type="submit"></input>
                </form>
            </Label>
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

AddReview.propTypes = {
  characteristics: PropTypes.object.isRequired,
}


export default AddReview;



