import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"
import styled, { css } from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4} from '../../styles/Headers.jsx';
import {Form, Label, Input} from '../../styles/Forms.jsx';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);

    this.state = {
      question_id: 0,
      body: '',
      name: '',
      email: '',
      photos: []
    }
  };

  componentDidMount() {
    this.setState({
      question_id: this.props.question_id
    })
  }

  handleBody(event) {
    this.setState({
      body: event.target.value
    })
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  onImageUpload(event) {
    event.preventDefault();
    let copyPhotos = this.state.photos;
    copyPhotos.push(event.target.value);
    this.setState({photos: copyPhotos}, () => {
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
    .then(result => {console.log(result.data)})
    .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div>
        <Header2>Submit your Answer</Header2>
        <Header3>{this.props.name}: {this.props.body}</Header3>
        <form>
          <Header3>Your Answer</Header3>
          <Input type="text" name="question" maxLength="1000" onChange={this.handleBody}/>

          <Header3>Nickname</Header3>
          <Input type="text" name="name" placeholder=" Example: jack543!" maxLength="60" onChange={this.handleName}></Input>
          <Header4>For privacy reasons, do not use your full name or email address</Header4>

          <Header3>e-mail</Header3>
          <Input type="text" name="email" placeholder=" Example: jack@email.com" maxLength="60" onChange={this.handleEmail}></Input>
          <Header4>For authentication reasons, you will not be emailed</Header4>

          <Header3>Upload your photos
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
            </Form>
            <Form action="/action_page.php" onChange={this.onImageUpload}>
              <input type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
            </Form>
          </Header3>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };
}

export default AddAnswer;