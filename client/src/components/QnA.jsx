import React from 'react';
import styled, { css } from 'styled-components';
import axios from "axios"
import { Axios } from "../AxiosConfig.js"

import QuestionList from './QnA_Components/QuestionList.jsx';
import QuestionSearch from './QnA_Components/QuestionSearch.jsx';
import AddQuestion from './QnA_Components/AddQuestion.jsx';
import AddAnswer from './QnA_Components/AddAnswer.jsx';
import {RowContainer, ColumnContainer, AlignmentWrapper, MainHeader} from '../styles/Boxes.jsx'
import {Title, Header2, Header3, Text} from '../styles/Headers.jsx';

const QnAContainer = styled(ColumnContainer)`
  border-radius: 12px;
  row-gap:10px;
`

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.getQuestions = this.getQuestions.bind(this);

    this.state = {
      list: [],
      count: 4
    }
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    var current = this.props.product_id;
    Axios.get('/qa/questions', {params: {
      product_id: current,
      count: this.state.count
    }})
      .then(result => {
        this.setState({
          list: result.data.results
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  searchHandler(query) {
    console.log('searching the API for: ', query);
  }


  handleMoreQuestions(event) {
    event.preventDefault();
    this.setState({
      count: 9999
    },
    () => {this.getQuestions()})
  }


  render() {
    return (
      <QnAContainer>
        <MainHeader>
          <AlignmentWrapper>
            <Header2 secondary = {true}>Questions &amp; Answers</Header2>
          </AlignmentWrapper>
        </MainHeader>

        <QuestionSearch searchHandler={this.searchHandler} />
        <QuestionList questions={this.state.list} getQuestions={this.getQuestions}/>
        <button onClick={this.handleMoreQuestions}>More Answered Questions</button>
        <button>Add A Question</button>
        <AddQuestion id={this.props.product_id}/>
        <AddAnswer />
      </QnAContainer>
    );
  };
}

export default QnA;