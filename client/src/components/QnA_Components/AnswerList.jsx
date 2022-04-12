import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"

import AnswerListItem from './AnswerListItem.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.moreAnswers = this.moreAnswers.bind(this);
    this.getAnswers = this.getAnswers.bind(this);

    this.state = {
      answers: [],
      count: 2
    }
  }

  componentDidMount() {
    this.getAnswers();
  }

  moreAnswers() {
    this.setState({
      count: 999
    },
    () => {this.getAnswers()})
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
      loadMore = <button onClick={this.moreAnswers}>Load more answers</button>
    }
    return (
      <div>
        {this.state.answers.map(eachAnswer => {
        return <AnswerListItem answer={eachAnswer} key={eachAnswer.answer_id} id={eachAnswer.answer_id} getAnswers={this.getAnswers}/>
        })}
        {loadMore}
      </div>
    )
  }
}

export default AnswerList;