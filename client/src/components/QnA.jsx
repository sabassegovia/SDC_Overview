import React from 'react';
import styled, { css } from 'styled-components';
import axios from "axios"
import { Axios } from "../AxiosConfig.js"

import QuestionList from './QnA_Components/QuestionList.jsx';
import QuestionSearch from './QnA_Components/QuestionSearch.jsx';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);

    this.state = {
      list: []
    }
  }

  // load the questions and answers for the current product on page
  componentDidMount() {
    var current = this.props.product_id;
    Axios.get('/qa/questions', {params: {
      product_id: current,
      count: 4
    }})
      .then(result => {
        this.setState({
          list: result.data.results
        })
      })
  }

  searchHandler(query) {
    console.log('searching the API for: ', query);
  }

<<<<<<< HEAD
=======
  handleMoreQuestions(event) {
    event.preventDefault();
    var current = this.props.product_id;
    Axios.get('/qa/questions', {params: {
      product_id: current,
      count: 9999
    }})
      .then(result => {
        this.setState({
          list: result.data.results
        })
      })
  }


>>>>>>> 2e114281f39bf7983c352126fca5c2433723f493
  render() {
    return (
      <div>
        <h2>Questions & Answers</h2>
        <QuestionSearch searchHandler={this.searchHandler} />
        <QuestionList questions={this.state.list}/>
        <button onClick={this.handleMoreQuestions}>More Answered Questions</button>
        <button>Add A Question</button>
      </div>
    );
  };
}

export default QnA;