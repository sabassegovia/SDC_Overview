import React from 'react';
import QuestionListItem from './QuestionListItem.jsx';

var QuestionList = (props) => {
  return (
    <div className="qa-list-container">
      {props.questions.map(eachQuestion => {
        return <QuestionListItem question={eachQuestion} key={eachQuestion.question_id} id={eachQuestion.question_id} getQuestions={props.getQuestions}/>
        })}
    </div>
  );
}

export default QuestionList;