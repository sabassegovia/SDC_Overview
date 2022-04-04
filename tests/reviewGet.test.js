import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"



describe('contacting the API for reviews', done => {
  const params = {}
  it('should not respond back with reviews unless product_id is specified', () => {
    return Axios.get(`/reviews`, {params})
    .then(result => {

    })
    .catch(err => {
      expect(err).toMatch('error')
    })
  })

  it('should respond back with an Array of reviews if product_id IS specified', () => {
    params.product_id = 65631
    return Axios.get(`/reviews`, {params})
    .then(result => {
      expect(Array.isArray(result.data.results)).toBeTruthy()
    })
  })

  it('should respond back with the proper number of reviews', () => {
    params.product_id = 65631
    params.count = 3
    return Axios.get(`/reviews`, {params})
    .then(result => {
      expect(result.data.count).toBe(3)
    })
  })

  it('should respond back with the correct page of results', () => {
    params.product_id = 65631
    params.page = 2
    params.count = 3
    return Axios.get(`/reviews`, {params})
    .then(result => {
      expect(result.data.page).toBe((params.page - 1) * (params.count))
    })
  })

  it('it should retrieve meta data of the reviews of a product that includes ratings', () => {
    params.product_id = 65631
    return Axios.get(`/reviews/meta`, {params})
    .then(result => {
      expect(result.data).toHaveProperty('ratings')
    })
  })
  it('it should retrieve meta data of the reviews of a product that includes recommended', () => {
    params.product_id = 65631
    return Axios.get(`/reviews/meta`, {params})
    .then(result => {
      expect(result.data).toHaveProperty('recommended')
    })
  })

});