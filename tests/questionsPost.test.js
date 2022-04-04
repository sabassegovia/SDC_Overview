import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"


describe('contacting the API for answers to questions 2', done => {
  it('it should not post a question if fields are missing', () => {
    var body = {
      "name": "this is a name",
      "email": "boblaw@gmail.com",
      "product_id": 65631
    }
    return Axios.post(`/qa/questions`, body)
    .then(result => {
    })
    .catch(err => {
      expect(err).toMatch('error')
    })
  })

  it('it should post a question', () => {
    var body = {
      "body": "this is a question",
      "name": "this is a name",
      "email": "boblaw@gmail.com",
      "product_id": 65631
    }
    return Axios.post(`/qa/questions`, body)
    .then(result => {
      expect(result.data).toBe("Created")
    })
  })

  it('it should post an answer for a given question', () => {
    var body = {
      body: 'this is the body',
      name: 'this is the name',
      email: 'thisisemail@email.com',
      photos: []
    }
    var question_id = 573870


    return (Axios.post(`/qa/question/${question_id}`, body))
    .then(result => {
      expect(result.data).toBe("Created")
    })
    .catch(err => {
    })
  })
})