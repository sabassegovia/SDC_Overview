import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {RowContainer, ColumnContainer, AlignmentWrapper, EmptyBox} from '../../styles/Boxes.jsx'
import {Title, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'
import {Form} from '../../styles/Forms.jsx'

const QnASearchContainer = styled(RowContainer)`
  padding: 15px 0 15px 0;
  border-right:none;
  border-left:none;

`

const QnAForm = styled(Form)`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
`

const QnATextArea = styled.textarea`
  font-family: "Helvetica";
  color: '#3e3e3e';
  font-size: 20px;
  height: 150px;
  width: 450px;
`
const QnAInput = styled.input`
  height: 70px;
  width: 40%;
  background: #e4e4e4;
  color:  #3e3e3e;
  border-radius: 3px;
  font-size:20px;
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

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      queryString: ''
    }
  }

  handleChange(event) {
    this.setState({
      queryString: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchHandler(this.state.queryString);
  }

  render() {
    return (
    <AlignmentWrapper>
      <QnASearchContainer border = {true} >
          <EmptyBox />
          <QnAForm >
            <QnATextArea type="text" onChange={this.handleChange} />
            <QnAInput type="submit" onClick={this.handleSubmit} />
          </QnAForm>

      </QnASearchContainer>
    </AlignmentWrapper>

    );
  }
}

QuestionSearch.propTypes = {
  searchHandler: PropTypes.func,
}

export default QuestionSearch;