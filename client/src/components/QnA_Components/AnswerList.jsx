import React from 'react';
import AnswerListItem from './AnswerListItem.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    this.setState({
      answers: this.props.answers
    })
  }

  render() {
    var list = Object.keys(this.state.answers).map(id => {
      return <AnswerListItem answer={this.state.answers[id]} key={id}/>;
    });

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default AnswerList;