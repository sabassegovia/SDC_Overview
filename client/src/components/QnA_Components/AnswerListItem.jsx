import React from 'react';
import moment from 'moment';

class AnswerListItem extends React.Component {
  constructor(props) {
    super(props);
    this.sellerHandler = this.sellerHandler.bind(this);

    this.state = {

    }
  }

  sellerHandler() {
    if (this.props.answer.answerer_name === "Seller") {
      return ' - ' + <b>SELLER</b>
    }
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
                |  Helpful? Yes ({this.props.answer.helpfulness})
                |  Report
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
};

export default AnswerListItem;