import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from 'react-styled-typography';
import {Title, Wrapper, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'
import {CartContainer, RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx';

const QuestionContainer = styled(ColumnContainer)`
  row-gap: 10px;
  border: 1px dashed #3e3e3e;
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
};
  animation: fadein .3s linear;
`
const QuestionRow = styled(RowContainer)`
  justify-content: space-between;
  align-items: center;
`
const AddAnswerButton = styled.button`
  height: 40px;
  width: 160px;
  background: #e4e4e4;
  color:  #3e3e3e;
  border-radius: 3px;
  font-size:16px;
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


const QuestionBody = styled(Header3)`
  border-top: none;
  border-left: none;
  border-right:none;
`
const HelpfulReport = styled(RowContainer)`
  column-gap: 20px;
  padding: 0 0 0 20px;
  justify-content: flex-start;
  align-items: center;

`


class QuestionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
    this.handleAddAnswerButton = this.handleAddAnswerButton.bind(this);
    this.state = {showAddAnswer: false}

    this.AddAnswerButton = React.createRef()
  }
  handleAddAnswerButton(event) {
    // console.log('is this firing?')
    event.preventDefault();
    this.setState({showAddAnswer: !(this.state.showAddAnswer)})
  }

  onHelpfulClick(event) {
    event.preventDefault();
    Axios.put(`/qa/questions/${this.props.id}/helpful`)
    .then(result => {console.log(result); this.props.getQuestions();})
    .catch(err => {console.log(err)})
  }

  onReportClick(event) {
    event.preventDefault();
    Axios.put(`/qa/questions/${this.props.id}/report`)
    .then(result => {console.log(result); this.props.getQuestions();})
    .catch(err => {console.log(err)})
  }

  render () {
    // let AddAnswerThing;
    // if (this.state.showAddAnswer) {
    //   AddAnswerThing =
    // } else {
    //   AddAnswerThing = ''
    // }

    return (
      <QuestionContainer border = "true">
          <AlignmentWrapper>
            <QuestionRow>
              <QuestionBody
                css = {`
                font-size:20px;

                `}
                border = {false}><b>Q:</b> {this.props.question.question_body}</QuestionBody>
                <HelpfulReport>
                  <Header3
                    css={`
                      &:hover {
                        transition-duration: .3s;
                        transform: scale(1.05);
                        cursor: pointer;}`}
                  underline="true">Helpful? <span role = "presentation" onClick={this.onHelpfulClick}>Yes</span> ({this.props.question.question_helpfulness})
                  </Header3>
                  <Header3
                    css={`
                    &:hover {
                      transition-duration: .3s;
                      transform: scale(1.05);
                      cursor: pointer;}`}
                    underline="true"
                    onClick={this.onReportClick}>
                      Report
                  </Header3>


                  <AddAnswerButton
                    ref = {this.AddAnswerButton}
                    onClick={this.handleAddAnswerButton}>{!this.state.showAddAnswer ? `Add An Answer` : `Go Back`}</AddAnswerButton>
                  {this.state.showAddAnswer ? <AddAnswer
                    handleAddAnswerButton = {this.handleAddAnswerButton.bind(this)}
                    AddAnswerButtonPosition = {this.AddAnswerButton.current.getBoundingClientRect()}
                    question_id={this.props.id}
                    name={this.props.name}
                    body={this.props.question.question_body}/> : null}
                </HelpfulReport>
            </QuestionRow>
          <AnswerList answers={this.props.question.answers} question_id={this.props.id} getQuestions={this.props.getQuestions}/>
      </AlignmentWrapper>
        </QuestionContainer>
    );
  }
}

QuestionListItem.propTypes = {
  question: PropTypes.object,
  id: PropTypes.number,
  getQuestions: PropTypes.func,
  name: PropTypes.string,
}

export default QuestionListItem;