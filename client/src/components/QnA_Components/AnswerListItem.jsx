import React from 'react';
import moment from 'moment';

var AnswerListItem = (props) => {
  return (
    <div>
      <section className="answer"><b>A: </b>{props.answer.body}
        <div className="qa-list-item-helpful-container">
          <section className="helpful">
            <div>
              by {props.answer.answerer_name}
              , {moment(props.answer.date).format('MMMM Do YYYY')}
              |  Helpful? Yes ({props.answer.helpfulness})
              |  Report
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AnswerListItem;