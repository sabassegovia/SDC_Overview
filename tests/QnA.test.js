import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

import QnA from '../client/src/components/QnA';

Enzyme.configure({ adapter: new Adapter() });

describe('loading the page', () => {
  it('should load', () => {
    const wrapper = shallow(<QnA/>);
    expect(wrapper).toExist();
  });

  it('verifies product_id state is passed from index to QnA', () => {
    class DummyIndex extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          overview: {
            product_id: 65631
          }
        }
      }

      render() {
        return (
          <QnA product_id = {this.state.overview.product_id}/>
        );
      }
    };

    const wrapper = shallow(<DummyIndex />);
    expect(wrapper.find(QnA)).toHaveProp({'product_id': 65631});
  });
});

// describe('qna list component', () => {
//   it('loads onto the screen')
//   it('loads each list item')
//   it('loads the answered questions button')
//   it('loads the add question button')
// });

// describe('qna list item component', () => {
//   it('loads each list item and renders each')
//   it('displays the correct user')
//   it('accounts for if the user is the seller')
//   it('has a timestamp')
//   it('has the correct helpful count')
//   it('correctly reports questions')
//   it('allows the user to add an answer')
//   it('displays an image modal when clicked')
//   it('makes the image modal go away when clicked again')
// });

// describe('qna searchbar', () => {
//   it('sends an axios GET request query')
//   it('loads the qna list when a response is received')
// });