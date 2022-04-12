import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"
import styled, { css } from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4} from '../../styles/Headers.jsx';
import {Form, Label, Input} from '../../styles/Forms.jsx';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.state = {
      body: '',
      name: '',
      email: '',
      product_id: 0
    }
  };

  componentDidMount() {
    this.setState({
      product_id: this.props.id
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

  handleSubmit(event) {
    event.preventDefault();
    var params = {
      product_id: this.state.product_id,
      body: this.state.body,
      name: this.state.name,
      email: this.state.email
    }
    console.log('submitting question!')
    Axios.post(`/qa/questions`,  params )
    .then(result => {console.log(result.data)})
    .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div>
        <Header2>Ask Your Question</Header2>
        <Header3>About the [Product Name Here]</Header3>
        <form>
          <Header3>What is your question in one sentence?</Header3>
          <Input type="text" name="question" maxLength="1000" onChange={this.handleBody}/>

          <Header3>Nickname</Header3>
          <Input type="text" name="name" placeholder=" Example: jackson11!" maxLength="60" onChange={this.handleName}></Input>
          <Header4>For privacy reasons, do not use your full name or email address</Header4>

          <Header3>e-mail</Header3>
          <Input type="text" name="email" placeholder=" Example: jackson11@email.com" maxLength="60" onChange={this.handleEmail}></Input>
          <Header4>For authentication reasons, you will not be emailed</Header4>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };
}

export default AddQuestion;