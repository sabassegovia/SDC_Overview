import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import styled from 'styled-components'
import 'jest-styled-components'

import Overview from '../client/src/components/QnA';

// configure({ adapter: new Adapter() });
Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  class DummyIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        overview: {
          product_id: 65631,
        },
        rating: 0,
      }
    }
    render() {
      return (
        <Overview
          product_id = {this.state.overview}
          rating = {this.state.rating}
          />
      );
    }
  };
})

describe('loading the page', () => {
  it('should load', () => {
    const wrapper = shallow(<Overview/>);
    expect(wrapper).toExist();
  });
})





