import React from 'react';
import QuestionListItem from './QuestionListItem.jsx';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {RowContainer, ColumnContainer, AlignmentWrapper, EmptyBox} from '../../styles/Boxes.jsx'
import {Title, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

const QuestionsAnswersContainer = styled(ColumnContainer)`
  width: 100%:
  column-gap: 10px;
  /* justify-content: flex-start; */
  row-gap: 10px;
  border-top: none;
  padding: 10px;
  border-bottom: none;
  flex-wrap:wrap;
  flex-grow: 1;
`
const QuestionsColumn = styled(RowContainer)`
`

const EmptyBoxContainer = styled(ColumnContainer)`
  justify-content: flex-end;

`

var QuestionList = (props) => {
  return (
    <QuestionsColumn>
        <EmptyBox />

        <QuestionsAnswersContainer border = {true}>
          {props.questions.map(eachQuestion => {
            return <QuestionListItem question={eachQuestion} key={eachQuestion.question_id} id={eachQuestion.question_id} getQuestions={props.getQuestions} name={props.name}/>
            })}
        </QuestionsAnswersContainer>
        <EmptyBox />



    </QuestionsColumn>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array,

}

export default QuestionList;