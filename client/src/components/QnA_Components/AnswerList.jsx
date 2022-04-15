import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"

import AnswerListItem from './AnswerListItem.jsx';
import PropTypes from 'prop-types';

import styled from 'styled-components'
import {RowContainer, ColumnContainer, AlignmentWrapper, EmptyBox} from '../../styles/Boxes.jsx'
import {Title, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

const AnswerListContainer = styled(ColumnContainer)`
  row-gap:10px;
  padding: 10px;

};
`
const MoreAnswersButton = styled.button`
  background: #e4e4e4;
  width: 120px;
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


class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.moreAnswers = this.moreAnswers.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.state = {
      answers: [],
      count: 2,
      moreAnswersClicked: false,
    }
    this.moreAnswersButton = React.createRef()
  }

  componentDidMount() {
    this.getAnswers();
  }

  moreAnswers() {
    if (!this.state.moreAnswersClicked) {
      this.setState({
        count: 999,
        moreAnswersClicked:true
      },
      () => {this.getAnswers()})
    } else {
      this.setState({
        count: 2,
        moreAnswersClicked:false
      }, () => {this.getAnswers()})
    }
  }

  getAnswers() {
    var current = this.props.question_id;
    Axios.get(`/qa/questions/${current}/answers`, {params: {
      question_id: current,
      count: this.state.count
    }})
      .then(result => {
        this.setState({
          answers: result.data.results
        })
      })
  }

  render() {
    var loadMore;
    var ans = this.props.answers;
    if (Object.keys(ans).length > 2) {
      loadMore = <MoreAnswersButton ref={this.moreAnswersButton} onClick={this.moreAnswers}>{!this.state.moreAnswersClicked ? 'Load more answers' : 'Show less answers'}</MoreAnswersButton>
    }
    return (

      <AnswerListContainer>
        {this.state.answers.map(eachAnswer => {
          return <AnswerListItem answer={eachAnswer} key={eachAnswer.answer_id} id={eachAnswer.answer_id} getAnswers={this.getAnswers}/>
        })}
        {loadMore}
      </AnswerListContainer>
    )
  }
}

AnswerList.propTypes = {
  answers: PropTypes.object,
  question_id: PropTypes.number,
  questionRef: PropTypes.object,
}


export default AnswerList;