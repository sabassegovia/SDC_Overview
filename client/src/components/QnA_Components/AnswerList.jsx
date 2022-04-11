import React from 'react';
import AnswerListItem from './AnswerListItem.jsx';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"

class AnswerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    var current = this.props.question_id;
    Axios.get(`/qa/questions/${current}/answers`, {params: {
      question_id: current,
      count: 2
    }})
      .then(result => {
        this.setState({
          answers: result.data.results
        })
      })
  }

  moreAnswers() {
    var current = this.props.question_id;
    Axios.get(`/qa/questions/${current}/answers`, {params: {
      question_id: current,
      count: 999
    }})
      .then(result => {
        this.setState({
          answers: result.data.results
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.answers.map(eachAnswer => {
        return <AnswerListItem answer={eachAnswer} key={eachAnswer.answer_id} id={eachAnswer.answer_id}/>
        })}
      </div>
    )
  }
}

export default AnswerList;