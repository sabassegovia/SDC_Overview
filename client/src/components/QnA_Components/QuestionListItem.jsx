import React from 'react';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"
import AnswerList from './AnswerList.jsx';
import Typography from 'react-styled-typography';
import AddAnswer from './AddAnswer.jsx';

class QuestionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
    this.handleAddAnswerButton = this.handleAddAnswerButton.bind(this);
    this.state = {showAddAnswer: false}
  }
  handleAddAnswerButton(event) {
    event.preventDefault();
    this.setState({showAddAnswer: !this.state.showAddAnswer})
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
    let AddAnswerThing;
    if (this.state.showAddAnswer) {
      AddAnswerThing =  <AddAnswer question_id={574113} name={this.props.name} body={this.props.question.question_body}/>
    } else {
      AddAnswerThing = ''
    }

    return (
      <div>
       <div className="qa-list-item-container">
         <section className="question">
          <h3><b>Q:</b> {this.props.question.question_body}</h3>
          <div className="question-helpfulness">
            <Typography
                variant="h2"
                css={`
                  color: black;
                  font-size: 14px;
                  line-height: 16px;
                  text-align: right;
                  transition: all 0s ease 0s;
                  height: 16px;
                  width: 200px;
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

            <div>
              <Typography
                variant="h2"
                css={`
                  color: #989898;
                  font-size: 12px;
                  line-height: 16px;
                  text-align: right;
                  transition: all 0s ease 0s;
                  height: 16px;
                  width: 200px;
                  display: block;
                  box-sizing: border-box;
                  &:hover {
                    transition-duration: .3s;
                    transform: scale(1.05);
                    cursor: pointer;
                  }
                  `} underline="true"
                  onClick={this.onReportClick}>Report</Typography>
                <tag onClick={this.handleAddAnswerButton}>Add An Answer</tag>
                {AddAnswerThing}
              </div>
            </div>
          </section>
          <AnswerList answers={this.props.question.answers} question_id={this.props.id} getQuestions={this.props.getQuestions} />
        </div>
     </div>
    );
  }
}

export default QuestionListItem;