import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"

describe('contacting the API for answers to questions ', done => {
  let params = {
    queston_id: 573870,
  }
  it('should retrieve answers', () => {
    return Axios.get(`qa/questions/${573870}/answers`)
    .then(results => {
      expect(results.data.results).toBeDefined()
    })
  })
  it('should retrieve different answers if different page is specified', () => {
    let params1 = {
      page:1,
      count:1
    }
    let params2 = {
      page:2,
      count:1
    }
    Promise.all([Axios.get(`qa/questions/${573870}/answers`, {params1}), Axios.get(`qa/questions/${573870}/answers`, {params2})])
      .then(results => {
        expect(results[0].data.results).not.toEqual(results[1].data.results)
      })
      .catch(err => {
      })
  })
})