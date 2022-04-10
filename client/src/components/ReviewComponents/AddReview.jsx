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
    this.onCharSubmit = this.onCharSubmit.bind(this);
  }

  onReviewSubmit(event) {
    event.preventDefault();
    this.setState({
      summary: event.target[0].value,
      body: event.target[1].value,
      name: event.target[2].value,
      email: event.target[3].value
    })
  }

  onCharSubmit(event) {
    event.preventDefault();

    let id = event.target.name;
    let copiedCharacteristics = this.state.characteristics;
    copiedCharacteristics[id] = event.target.value;
    console.log(JSON.stringify(copiedCharacteristics));
    this.setState({ characteristics: copiedCharacteristics });
  }

  render() {
    const MakeFormFromCharacteristics = (characteristics) => {

      const formDescriptions = {
        Fit: ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long" ],
        Length:["Runs short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long" ],
        Comfort: ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
        Quality: ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"],
        Size: ["A size too small" , "1/2 a size too small", "Perfect" , "1/2 a size too big", "A size too wide"],
        Width: ["Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"]
      }

      return Object.keys(characteristics).map(characteristic => {
        return (
          <div key={characteristic}>
            {characteristic}
            <CharacteristicsBox >
            <form onChange={this.onCharSubmit}>
              <CharacteristicsButtons>

                <input type="radio" name={JSON.stringify(characteristics[characteristic].id)} value="1"></input>
                <input type="radio" name={JSON.stringify(characteristics[characteristic].id)} value="2"></input>
                <input type="radio" name={JSON.stringify(characteristics[characteristic].id)} value="3"></input>
                <input type="radio" name={JSON.stringify(characteristics[characteristic].id)} value="4"></input>
                <input type="radio" name={JSON.stringify(characteristics[characteristic].id)} value="5"></input>

              </CharacteristicsButtons>
              </form>
              <IndividualCharacteristic>
                {formDescriptions[characteristic].map(description => {
                  return <p key={description}> {description} </p>
                })}
              </IndividualCharacteristic>

            </CharacteristicsBox>
          </div>
        );
      })
    }

    return (
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
              <Label>Do you recommend this product?<input type="checkbox" /></Label>
              <Label>
                <CharacteristicsContainer>Characteristics
                  {MakeFormFromCharacteristics(this.props.characteristics)}

                </CharacteristicsContainer>
              </Label>
              <form onSubmit={this.onReviewSubmit}>
                <Label>Summary<Input placeholder="type here..."></Input></Label>
                <Label>Review Body<Input placeholder="type here..."></Input></Label>

                <Label>Nickname<Input placeholder=" ex. JohnDoe"></Input></Label>
                <Label>e-mail<Input placeholder=" ex. johndoe@gmail.com"></Input></Label>
                <Button type="submit"> Submit</Button>
                {/* <input type="submit" value="Submit"/> */}
              </form>

              <Label>Upload your photos
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename"></input>
                  <input type="submit"></input>
                </form>
              </Label>
              <Button >Submit</Button>
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



