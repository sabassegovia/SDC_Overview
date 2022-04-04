import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"

describe('contacting the API for cart information', done => {
  it('should respond back with a list of products added to the cart by a user', () => {
    return Axios.get('/cart')
      .then(result => {
        expect(Array.isArray(result.data)).toBeTruthy()
      })
  })
  it('should add a product toeh cart', () => {
    var param = {sku_id: 2352322}
    return Axios.post('/cart', param)
    .then(result => {
      expect(result.data).toBe('Created')
    })
  })
})