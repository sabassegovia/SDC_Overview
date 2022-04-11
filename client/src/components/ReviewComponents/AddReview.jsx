import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../styles/Buttons.jsx';
import {Title, Wrapper, Header2} from '../../styles/Headers.jsx';
import {Form, Label, Input} from '../../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox, CharacteristicsContainer, CharacteristicsBox, CharacteristicsButtons, IndividualCharacteristic} from '../../styles/Boxes.jsx';
import styled, { css } from 'styled-components';
import AddReviewStarRating from './AddReviewStarRating.jsx';

import axios from 'axios';
import {Axios} from "../../AxiosConfig.js"

const NewReviewBox = styled(BigBox)`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const SummaryInput = styled(Input)`
  width: 70%;
  inline-size: 400px;
  overflow-wrap: break-word;
  word-break: break-all;
  height: 25px;
`;

const BodyInput = styled(Input)`
  width: 70%;
  inline-size: 500px;
  overflow-wrap: break-word;
  word-break: break-all;
  height: 60px;
`;
const FadedLabel = styled(Label)`
margin-top: 0px;
margin-bottom: 0.5em;
color: #989898;
`;

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 0,
      count: 10,
      rating: 0,
      summary: '',
      body: '',
      recommend: '',
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    }
    this.onTotalSubmit = this.onTotalSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.onRecommend = this.onRecommend.bind(this);
    this.onReviewSubmit = this.onReviewSubmit.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
    this.onCharSubmit = this.onCharSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({product_id: this.props.product_id}, () => {
      console.log(this.state.product_id)})
  }

  onStarClick(starRating) {
    this.setState({rating: starRating}, () => {
      console.log(this.state.rating);
    })
  }

  onRecommend(event) {
    event.preventDefault();
    var bool = event.target.value === "true" ? true: false;
    // console.log(event.target.value);
    this.setState({ recommend: bool }, () => {
      console.log(this.state.recommend);
    })
  }

  onReviewSubmit(event) {
    event.preventDefault();
    this.setState({
      [Object.values(event.target)[1].name]: event.target.value}, () => {
      console.log(this.state[Object.values(event.target)[1].name])
    })
  }

  onImageUpload(event) {
    event.preventDefault();
    // console.log(event.target.value);
    let copyPhotos = this.state.photos;
    copyPhotos.push(event.target.value);
    this.setState({photos: copyPhotos}, () => {
      console.log(JSON.stringify(this.state.photos))
    });
  }

  onCharSubmit(event) {
    event.preventDefault();
    let id = event.target.name;
    let copiedCharacteristics = this.state.characteristics;
    copiedCharacteristics[id] = Number(event.target.value);
    this.setState({ characteristics: copiedCharacteristics }, () => {
      console.log(JSON.stringify(this.state.characteristics))
    });
  }

  onTotalSubmit(event) {
    event.preventDefault();
    //getting error of "state is undefined??"
    const params = {
      product_id: this.state.product_id,
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: this.state.recommend,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: this.state.characteristics
    }

    console.log(params)
    Axios.post(`/reviews`,  params )
    .then(result => {console.log(result.data)})
    .catch(err => {console.log(err)})
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
            <Form onSubmit={this.onTotalSubmit}>
              <Label>Overall rating
                <AddReviewStarRating onStarClick={this.onStarClick} />
              </Label>
              <Label onChange={this.onRecommend}>
                Do you recommend this product?
                Yes
                <input type="radio" name="recommend" value="true" />
                No
                <input type="radio" name="recommend" value="false" />
              </Label>
              <Label>
                <CharacteristicsContainer>Characteristics
                  {MakeFormFromCharacteristics(this.props.characteristics)}

                </CharacteristicsContainer>
              </Label>
              <form onChange={this.onReviewSubmit}>
                <Label>
                  Summary
                  <SummaryInput type="text" name="summary" placeholder="Example: Best purchase ever!" maxLength="60"/>
                </Label>
                <Label>
                  Review Body
                  <BodyInput type="text" name="body" placeholder="minimum 50 characters" minLength="50"/>
                </Label>
                <Label>Nickname<Input type="text" name="name" placeholder=" Example: jackson11!" maxLength="60"></Input>
                </Label>
                <FadedLabel>For privacy reasons, do not use your full name or email address</FadedLabel>

                <Label>e-mail<Input type="text" name="email" placeholder=" Example: jackson11@email.com" maxLength="60"></Input></Label>
                <FadedLabel>For authentication reasons, you will not be emailed</FadedLabel>

                </form>

              <Label>Upload your photos
                <Form action="/action_page.php" onChange={this.onImageUpload}>
                  <input type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
                  {/* <input type="submit"></input> */}
                </Form>
              </Label>

              <Button onClick={this.onTotalSubmit}> Submit</Button>
            </Form>
          </div>
        </NewReviewBox>
      </div>
    );
  }
}

AddReview.propTypes = {
  characteristics: PropTypes.object.isRequired,
  product_id: PropTypes.number.isRequired,
}


export default AddReview;



