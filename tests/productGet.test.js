import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"



describe('contacting the API for products', done => {
  let params = {}
  it('should respond back with an array of products', () => {
    return Axios.get('/products', {params})
    .then(result => {

      expect(Array.isArray(result.data)).toBeTruthy()
    })
  })

  it('should respond back with the correct number of products', () => {
    var count = 10
    params.count = count
    return Axios.get('/products', {params})
    .then(result => {
      expect(result.data).toHaveLength(count)
    })
  })

  it('should respond back with the correct product id', () => {
    var id = 65631
    return Axios.get(`/products/${id}`)
    .then(result => {
      expect(result.data).toEqual({
          "id": 65631,
          "campus": "rfp",
          "name": "Camo Onesie",
          "slogan": "Blend in to your crowd",
          "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
          "category": "Jackets",
          "default_price": "140.00",
          "created_at": "2022-03-29T15:08:08.445Z",
          "updated_at": "2022-03-29T15:08:08.445Z",
          "features": [
              {
                  "feature": "Fabric",
                  "value": "Canvas"
              },
              {
                  "feature": "Buttons",
                  "value": "Brass"
              }
          ]
      })
    })
  })

  it('should respond back with styles of that product', () => {
    var id = 65631
    return Axios.get(`/products/${id}/styles`, {params})
    .then(result => {
      expect(result.data.results[0].style_id).toBe(404874)
    })
  })

  it('should respond back an array of related products', () => {
    var id = 65631
    return Axios.get(`/products/${id}/related`, {params})
    .then(result => {
      expect(Array.isArray(result.data)).toBeTruthy()
    })
  })

})
