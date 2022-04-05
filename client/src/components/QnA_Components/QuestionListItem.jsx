import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"
import AnswerList from './AnswerList.jsx';

class QuestionListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount(){}

  render () {
    return (
      <div>
       <div className="qa-list-item-container">
         <section className="question">
           <h3><b>Q:</b> {this.props.question.question_body}</h3>
           <div className="question-helpfulness">
             Helpful? Yes ({this.props.question.question_helpfulness})
             |  Add Answer
           </div>
         </section>
         <AnswerList answers={this.props.question.answers} />
       </div>
     </div>
    );
  }
}

export default QuestionListItem;