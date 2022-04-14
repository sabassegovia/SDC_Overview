import React from 'react';
import moment from 'moment';
import axios from "axios"
import styled, {css} from 'styled-components';
import { Axios } from "../../AxiosConfig.js";
import AddAnswer from "./AddAnswer.jsx";
import PropTypes from 'prop-types';
import {RowContainer, ColumnContainer, AlignmentWrapper, MainHeader, ReviewImages} from '../../styles/Boxes.jsx'
import {Title, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx';

import ReviewImageModal from '../ReviewComponents/ReviewImageModal.jsx';

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
    this.onImageClick = this.onImageClick.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      question_id: 0,
      showImage: false,
      modalImage: ''
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

  onImageClick(event) {
    event.preventDefault();
    this.setState({showImage: true, modalImage: event.target.src});
  }

  hideModal(event) {
    event.preventDefault();
    this.setState({showImage: false})
  }

  render() {
    let images;
    if (this.props.answer.photos.length === 0) {
      images = <div></div>
    } else {
    images = (
      <ReviewImages>
      {this.props.answer.photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.id} onClick={this.onImageClick} width="80%" height="100%" className="reviewImage" role="presentation"/>
        </div>
      ))}
      </ReviewImages>
    )
    }
    return (

        <AnswerContainer >
          <Answer>
            <Header3>A: </Header3> <Header3>{this.props.answer.body}</Header3>
          </Answer>
          {images}
          {this.state.showImage ? <ReviewImageModal show={this.state.showImage} handleClose={this.hideModal} img={this.state.modalImage}/> : null}
              <AuthorHelpfulRow>
                <Author>
                  by {this.props.answer.answerer_name}{this.sellerHandler}
                </Author>
                <Date>
                  {moment(this.props.answer.date).format('MMMM Do YYYY')}
                </Date>

                <Header3>Helpful?</Header3>
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