import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"


describe('post a review to the API', done => {
  var params = {
    product_id: 65631,
    rating: 5,
    summary: 'it was ok'
  }
  it('should NOT post a review that does not have all the proper fields', () => {


    return Axios.post('/reviews')
    .then(result => {
      expect(result.data.message).toBe('Request failed with status code 422')
    })
  })

  it('should POST a review that DOSE have all the proper fields', () => {
    var body = {
      "product_id": 65631,
      "count":10,
      "rating": 4,
      "summary": "was meh",
      "body": "pretty meh i but could be better",
      "recommend": true,
      "name": "Bob Bloblaw",
      "email": "bobbloblaw@gmail.com",
      "photos": [],
      "characteristics": {}
  }

    return Axios.post('/reviews', body)
    .then(result => {
      expect(result.data).toBe('Created')
    })
  })
});