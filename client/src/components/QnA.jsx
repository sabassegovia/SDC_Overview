import React from 'react';
import styled, { css } from 'styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios"
import { Axios } from "../AxiosConfig.js"

import QuestionList from './QnA_Components/QuestionList.jsx';
import QuestionSearch from './QnA_Components/QuestionSearch.jsx';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);

    this.state = {
      list: []
    }
  }

  // load the questions and answers for the current product on page
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    var current = this.props.product_id;
    Axios.get('/qa/questions', {params: {
      product_id: current,
      count: 2
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


  render() {
    return (
      <div>
        <h2>Questions & Answers</h2>
        <QuestionSearch searchHandler={this.searchHandler} />
        <QuestionList questions={this.state.list}/>
      </div>
    );
  };
}

export default QnA;