import React from 'react';
import QuestionListItemAnswer from './QuestionListItemAnswer.jsx';

var QuestionListItem = (props) => {
  var answers = Object.entries(props.question.answers);
  return (
    <div>
      <div className="qa-list-item-container">
        <section className="question">
          Q: {props.question.question_body}
        </section>
        {answers.map(eachAnswer => {
        return <QuestionListItemAnswer answer={eachAnswer[1]} key={eachAnswer[0]}/>
        })}
      </div>
    </div>
  );
}

export default QuestionListItem;