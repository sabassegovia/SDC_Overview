import React from 'react';
import styled, { css } from 'styled-components';
import axios from "axios"
import { Axios } from "../AxiosConfig.js"
import PropTypes from 'prop-types';

import QuestionList from './QnA_Components/QuestionList.jsx';
import QuestionSearch from './QnA_Components/QuestionSearch.jsx';
import AddQuestion from './QnA_Components/AddQuestion.jsx';
import AddAnswer from './QnA_Components/AddAnswer.jsx';
import {RowContainer, ColumnContainer, AlignmentWrapper, MainHeader, EmptyBox} from '../styles/Boxes.jsx'
import {Title, Header2, Header3, Text} from '../styles/Headers.jsx';

const QnAContainer = styled(ColumnContainer)`
  border-radius: 12px;
  row-gap:10px;
  padding-bottom: 20px;
`

const QnAHeader = styled(MainHeader)`
  margin-top: 0;
  margin-bottom: 10px;

`
const MoreQuestionsButton = styled.button`
  position: relative;
  height: 70px;
  width: 300px;
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

const ButtonsRow = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;

`

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.state = {
      list: [],
      count: 4,
      AddQuestionModal: false,
    }
    this.AddQuestion = React.createRef()
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

  handleAddQuestionModal() {
    this.setState({
      AddQuestionModal: !this.state.AddQuestionModal,
    })}

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


        {/* <AddAnswer /> */}
        <ButtonsRow>
          <EmptyBox />
            <MoreQuestionsButton onClick={this.handleMoreQuestions}>More Answered Questions</MoreQuestionsButton>
            <MoreQuestionsButton
              ref = {this.AddQuestion}
              onClick={()=>{this.handleAddQuestionModal()}}>
              {!this.state.AddQuestionModal ? 'Add A Question' : 'Go Back'}
            </MoreQuestionsButton>
          <EmptyBox />


          {this.state.AddQuestionModal ? <AddQuestion
            handleAddQuestionModal = {this.handleAddQuestionModal.bind(this)}
            AddQuestionButtonPosition = {this.AddQuestion.current.getBoundingClientRect()}
            AddQuestionModal = {this.state.AddQuestionModal}
            name = {this.props.name}
            id={this.props.product_id}/> : null}

        </ButtonsRow>
      </QnAContainer>
    );
  };
}

QnA.propTypes = {
  product_id: PropTypes.number,
  name: PropTypes.string,

}

export default QnA;