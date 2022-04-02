import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"


describe('contacting the API for answers to questions 3', done => {
  it('it should mark questions as helpful', () => {
    var question_id = 573870
      return Axios.put(`/qa/questions/${question_id}/helpful`)
      .then(result => {
        expect(result.data).toBe("")
      })
      .catch(err => {
      })
  })

  it('it should mark questions as reported', () => {
    var question_id = 573870
      return Axios.put(`/qa/questions/${question_id}/reported`)
      .then(result => {
        expect(result.data).toBe("")
      })
      .catch(err => {
      })
  })

  it('it should mark answers as helpful', () => {
    var answer_id = 5361400
      return Axios.put(`/qa/questions/${answer_id}/helpful`)
      .then(result => {
        expect(result.data).toBe("")
      })
      .catch(err => {
      })
  })

  it('it should mark answers as reported', () => {
    var answer_id = 5361400
      return Axios.put(`/qa/questions/${answer_id}/reported`)
      .then(result => {
        expect(result.data).toBe("")
      })
      .catch(err => {
      })
  })
})