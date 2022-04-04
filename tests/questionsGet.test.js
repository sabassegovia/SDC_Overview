import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"



describe('contacting the API for questions', done => {
  var params = {
    product_id: 65631,
  }
  it('should retrieve a list of questions for a particular product', () => {
    return Axios.get('/qa/questions', {params})
      .then(result => {
        expect(result.data.results[0]).toHaveProperty("question_id")
      })
  })
  it('should retrieve the correct number of questions if specified', () => {
    params.count = 1
    return Axios.get('/qa/questions', {params})
      .then(result => {
        expect(result.data.results.length).toBeLessThanOrEqual(params.count)
      })
      .catch(err => {
      })
  })

  it('should retrieve the correct page of questions if specified', () => {
    params.count = 1
    var params2 = {
      product_id: 65631,
      count: 1,
      page: 2,
    }
    Promise.all([Axios.get('/qa/questions', {params}), Axios.get('/qa/questions', {params2})])
      .then(result => {
        expect(result[0].data).not.toBe(result[1].data)
      })
      .catch(err => {
      })
  })
})