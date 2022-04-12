import React from 'react';
import moment from 'moment';
import axios from "axios"
import { Axios } from "../../AxiosConfig.js"

class AnswerListItem extends React.Component {
  constructor(props) {
    super(props);
    this.sellerHandler = this.sellerHandler.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);

    this.state = {

    }
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
    return (
      <div>
        <section className="answer"><b>A: </b>{this.props.answer.body}
          <div className="qa-list-item-helpful-container">
            <section className="helpful">
              <div>
                by {this.props.answer.answerer_name}{this.sellerHandler}
                , {moment(this.props.answer.date).format('MMMM Do YYYY')}
                |  Helpful? <tag onClick={this.onHelpfulClick}>Yes</tag> ({this.props.answer.helpfulness})
                |  <tag onClick={this.onReportClick}>Report</tag>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
};

export default AnswerListItem;