import React from 'react';
import styled, { css } from 'styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios"
import { Axios } from "../AxiosConfig.js"

import QuestionList from './QnA Components/QuestionList.jsx';
import QuestionSearch from './QnA Components/QuestionSearch.jsx';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);

    this.state = {
      test: 'test'
    }
  }

  // load the questions and answers for the current product on page
  componentDidMount() {
    var current = this.props.product_id;
    Axios.get('/qa/questions', {
      product_id: current,
    })
      .then(result => {
        console.log(result.data);
        console.log(current)
      })
  }

  searchHandler(query) {
    console.log('searching the API for: ', query);
  }

  render() {
    return (
      <div>
        <h2>Questions & Answers</h2>
        <QuestionSearch searchHandler={this.searchHandler} />
        <QuestionList />
      </div>
    );
  };
}

export default QnA;