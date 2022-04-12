import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"
import AnswerList from './AnswerList.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from 'react-styled-typography';
import {Title, Wrapper, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'
import {CartContainer, RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx';

const QuestionContainer = styled(ColumnContainer)`
  row-gap: 10px;
`

const QuestionBody = styled(Header3)`
  flex-grow:1;
`
const HelpfulReport = styled(RowContainer)`
  column-gap: 10px;

`


class QuestionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
    this.state = {}
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
    return (

       <QuestionContainer border = "true">

        <AlignmentWrapper>

          <RowContainer>
            <QuestionBody border = {true}><b>Q:</b> {this.props.question.question_body}</QuestionBody>
              <HelpfulReport>

              <Typography
                  variant="h2"
                  css={`
                    color: black;
                    font-size: 14px;
                    line-height: 16px;
                    text-align: right;
                    transition: all 0s ease 0s;
                    height: 16px;
                    display: block;
                    box-sizing: border-box;
                    &:hover {
                      transition-duration: .3s;
                      transform: scale(1.05);
                      cursor: pointer;
                    }
                    `}
                underline="true">Helpful? <tag onClick={this.onHelpfulClick}>Yes</tag> ({this.props.question.question_helpfulness})
              </Typography>

              <Typography
                variant="h2"
                css={`
                    color: black;
                    font-size: 14px;
                    line-height: 16px;
                    text-align: right;
                    transition: all 0s ease 0s;
                    height: 16px;
                    display: block;
                    box-sizing: border-box;
                    &:hover {
                      transition-duration: .3s;
                      transform: scale(1.05);
                      cursor: pointer;
                    }
                    `}
              underline="true"
              onClick={this.onReportClick}><Header3>Report</Header3>

              </Typography>
            </HelpfulReport>

          </RowContainer>
          </AlignmentWrapper>






         <AnswerList answers={this.props.question.answers} question_id={this.props.id} getQuestions={this.props.getQuestions}/>
       </QuestionContainer>
    );
  }
}

QuestionListItem.propTypes = {
  question: PropTypes.object,
  id: PropTypes.number,
  getQuestions: PropTypes.func,
}

export default QuestionListItem;