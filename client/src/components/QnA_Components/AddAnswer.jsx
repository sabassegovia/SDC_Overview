import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

import { Axios } from "../../AxiosConfig.js"
import styled, { css } from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4} from '../../styles/Headers.jsx';
import {Form, Label, Input, InputTextArea, InputText} from '../../styles/Forms.jsx';
import {CartContainer, RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx';
import {CloseModalButton} from '../../styles/Icons.jsx'

import MorePictureUploads from './MorePictureUploads.jsx'

const AnswerFormContainer = styled(ColumnContainer)`
  position: absolute;
  z-index: 100;
  align-items: center;
  background: #FAFAFA;
  border-radius: 12px;
  /* top: ${props => window.scrollY + props.buttonPosition.y - props.ourPosition.height }px; */
  top: ${props => window.scrollY + 600 }px;

  left: ${props => window.scrollX + props.buttonPosition.left - props.ourPosition.width - 20}px;
  column-gap: 10px;
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
};
  animation: fadein .3s linear;
`
const AddSubmitButton = styled.button`
  width: 20%;
  height: 40px;
  background: #e4e4e4;
  color:  #3e3e3e;
  border-radius: 12px;
  &:hover {
    transition-duration: .3s;
    transform: scale(1.1);
    background: #3e3e3e;
    color: #e4e4e4;
  };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const AddAnswerContainer = styled(ColumnContainer)`
  position:relative;
  row-gap: 10px;

`

const FormColumn = styled.form`
  display:flex;
  flex-direction: column;
  row-gap: 10px;

`

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);

    this.state = {
      question_id: 0,
      body: '',
      name: '',
      email: '',
      photos: [],
      position: {},
      photoUploads: 0,
    }

    this.AddAnswerForm = React.createRef()
  };

   handleResize () {
    this.props.handleAddAnswerButton()
  }

  componentDidMount() {
    this.setState({
      question_id: this.props.question_id,
      position: this.AddAnswerForm.current.getBoundingClientRect(),
    })
    window.addEventListener('resize', this.props.handleAddAnswerButton)
    window.addEventListener('scroll', this.props.handleAddAnswerButton)

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.handleAddAnswerButton)
    window.removeEventListener('scroll', this.props.handleAddAnswerButton)


  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onImageUpload(value) {
    console.log('am i firing?')
    console.log(value)
    var {photoUploads, photos} = this.state
    // event.preventDefault();
    let copyPhotos = photos;
    var photoUploads = photoUploads < 5 ? photoUploads + 1 : photoUploads
    copyPhotos.push(value);
    this.setState({
      photos: copyPhotos,
      photoUploads: photoUploads
    }, () => {
      console.log(JSON.stringify(this.state.photos))
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var params = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos
    }
    Axios.post(`/qa/questions/${this.state.question_id}/answers`,  params )
    .then(result => {
      this.props.handleAddAnswerButton()

      console.log(result.data)})
    .catch(err => {console.log(err)})

  }

  render() {
    return (
      <AnswerFormContainer
        buttonPosition = {this.props.AddAnswerButtonPosition}
        ourPosition = {this.state.position}
        ref = {this.AddAnswerForm}
        border = {true}>
      <AlignmentWrapper css ={`margin: 30px; position: relative;`}>
        <AddAnswerContainer>
        <RowContainer css ={`
          justify-content: space-between;
          align-items: center;
        `}>

        <Header2
          border = {true}
          css = {`
          border-right: none;
          border-left: none;
          border-top: none;
          `}
          >Submit your Answer</Header2>
          <CloseModalButton
            onClick = {(e)=>{this.props.handleAddAnswerButton(e)}}/>
          </RowContainer>
        <Header3>{this.props.name}: {this.props.body}</Header3>
        <FormColumn>
          <Header3>Your Answer</Header3>
          <InputTextArea type="text" name="body" maxLength="1000" onChange={(e) => {this.handleChange(e)}}/>

          <Header3>Nickname</Header3>
          <InputText type="text" name="name" placeholder=" Example: jack543!" maxLength="60" onChange={(e) => {this.handleChange(e)}}/>
          <Header4>For privacy reasons, do not use your full name or email address</Header4>

          <Header3>e-mail</Header3>
          <InputText type="text" name="email" placeholder=" Example: jack@email.com" maxLength="60" onChange={(e) => {this.handleChange(e)}}/>
          <Header4>For authentication reasons, you will not be emailed</Header4>

          <Header3>Upload your photos

            <MorePictureUploads
              photoUploads = {this.state.photoUploads}
              onImageUpload = {this.onImageUpload}/>

            {/* <Form action="/action_page.php" onChange={this.onImageUpload}>
              <input type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
            </Form>
            <Form action="/action_page.php" onChange={this.onImageUpload}>
              <input type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
            </Form>
            <Form action="/action_page.php" onChange={this.onImageUpload}>
              <input type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
            </Form>
            <Form action="/action_page.php" onChange={this.onImageUpload}>
              <input type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
            </Form>
            <Form action="/action_page.php" onChange={this.onImageUpload}>
              <input type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
            </Form> */}
          </Header3>

          <AddSubmitButton onClick={this.handleSubmit}>Submit</AddSubmitButton>
        </FormColumn>
        </AddAnswerContainer>
      </AlignmentWrapper>
      </AnswerFormContainer>
    );
  };
}

AddAnswer.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  question_id: PropTypes.number,
  AddAnswerButtonPosition: PropTypes.object,
  handleAddAnswerButton: PropTypes.func,
}

export default AddAnswer;