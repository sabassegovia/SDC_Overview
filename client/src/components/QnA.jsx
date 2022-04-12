import React from 'react';
import styled, { css } from 'styled-components';
import axios from "axios"
import { Axios } from "../AxiosConfig.js"

import QuestionList from './QnA_Components/QuestionList.jsx';
import QuestionSearch from './QnA_Components/QuestionSearch.jsx';
import {RowContainer, ColumnContainer, AlignmentWrapper, MainHeader} from '../styles/Boxes.jsx'
import {Title, Header2, Header3, Text} from '../styles/Headers.jsx';

const QnAContainer = styled(ColumnContainer)`
  border-radius: 12px;
  row-gap:10px;
`

const QnAHeader = styled(MainHeader)`
  margin-top: 0;
  margin-bottom: 10px;

`

const MoreQuestionsButton = styled.button`
  height: 70px;
  width: 40%;
  background: #e4e4e4;
  color:  #3e3e3e;
  border-radius: 3px;
  font-size:20px;
  cursor: pointer;
  &:hover {
    transition-duration: .3s;
    transform: scale(1.1);
    background: #3e3e3e;
    color: #e4e4e4;
  };
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    })
    this.getQuestions();
  }


  render() {
    return (
      <QnAContainer>
        <QnAHeader border = {true}>
          <AlignmentWrapper>
            <Header2 secondary = {true}>Questions &amp; Answers</Header2>
          </AlignmentWrapper>
        </QnAHeader>

        <QuestionSearch searchHandler={this.searchHandler} />
        <QuestionList questions={this.state.list} getQuestions={this.getQuestions}/>


        <MoreQuestionsButton onClick={this.handleMoreQuestions}>More Answered Questions</MoreQuestionsButton>
        <MoreQuestionsButton>Add A Question</MoreQuestionsButton>
      </QnAContainer>
    );
  };
}

export default QnA;