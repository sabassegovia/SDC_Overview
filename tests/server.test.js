import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"



describe('contacting the server test', done => {
  it('should respond back with Hello World', () => {
    return Axios.get('/test')
    .then(result => {
      expect(result.data).toBe('Hello World!')
    })
  })
});


