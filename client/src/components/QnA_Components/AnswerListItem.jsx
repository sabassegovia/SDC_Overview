import React from 'react';
import moment from 'moment';
import axios from "axios"
import styled from 'styled-components';
import { Axios } from "../../AxiosConfig.js"
import AddAnswer from "./AddAnswer.jsx";
import PropTypes from 'prop-types';
import {RowContainer, ColumnContainer, AlignmentWrapper, MainHeader} from '../../styles/Boxes.jsx'
import {Title, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx';

const AnswerContainer = styled(ColumnContainer)`
  row-gap: 5px;

  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
};
  animation: fadein .3s linear;
`
const Answer = styled(RowContainer)`
  column-gap: 10px;
`
const AuthorHelpfulRow = styled(RowContainer)`
  padding: 0 0 0 15px;
  column-gap: 15px;
  align-items: center;
`
const Author = styled(Text)`
  width: 150px;
`

const Date = styled(Text)`
  width: 150px;
`
const Helpful = styled(Text)`
  &:hover {
    transition-duration: .3s;
    transform: scale(1.05);
    cursor: pointer;
    }
`


class AnswerListItem extends React.Component {
  constructor(props) {
    super(props);
    this.sellerHandler = this.sellerHandler.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);

    this.state = {
      question_id: 0,
    }
  }

  componentDidMount() {
    this.setState({
      question_id: this.props.id
    })
  }

  sellerHandler() {
    if (this.props.answer.answerer_name === "Seller") {
      return ' - ' + <b>SELLER</b>
    }
  }

  onHelpfulClick(event) {
    event.preventDefault();
    Axios.put(`/qa/answers/${this.props.id}/helpful`)
    .then(result => {console.log(result); this.props.getAnswers();})
    .catch(err => {console.log(err)})
  }

  onReportClick(event) {
    event.preventDefault();
    Axios.put(`/qa/answers/${this.props.id}/report`)
    .then(result => {console.log(result); this.props.getAnswers();})
    .catch(err => {console.log(err)})
  }

  render() {
    const isSeller = this.sellerHandler()
    // console.log(this.props.answer.photos)
    // var imageHandler = () => {
    //   for (i = 0; i < this.props.answer.photos.length; i++) {
    //     return <img src="`${this.props.answer.photos[i]}`"></img>
    //   }
    return (

        <AnswerContainer >
          <Answer>
            <Header3>A: </Header3> <Header3>{this.props.answer.body}</Header3>
          </Answer>


              <AuthorHelpfulRow>
                <Author>
                  by {this.props.answer.answerer_name}{isSeller}
                </Author>
                <Date>
                  {moment(this.props.answer.date).format('MMMM Do YYYY')}
                </Date>

                <Header4>Helpful?</Header4>
                  <Helpful onClick={this.onHelpfulClick}>Yes ({this.props.answer.helpfulness})</Helpful>
                  <Helpful onClick={this.onReportClick}>Report</Helpful>
              </AuthorHelpfulRow>



        </AnswerContainer>

    );
  }
};

AnswerListItem.propTypes = {
  answer: PropTypes.object,
  id: PropTypes.number,
  getAnswers: PropTypes.func,

}

export default AnswerListItem;