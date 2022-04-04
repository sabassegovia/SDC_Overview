import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"






describe('it should be able to mark a review as helpful or report', done => {

  // it('should not mark a review as being helpful if no review is specified', () => {
  //   var review_id = null // <--- just some random valid review id
  //   return Axios.put(`/reviews/${review_id}/helpful`)
  //     .then(result => {
  //       expect(result.data).toBe("")
  //     })
  // })

  it('should mark a review as being helpful', () => {
    var review_id = 1136187 // <--- just some random valid review id
    return Axios.put(`/reviews/${1136187}/helpful`)
      .then(result => {
        expect(result.data).toBe("")
      })
  })

  // it('should not mark a review as reported if no review is specified', () => {
  //   var review_id = null // <--- just some random valid review id
  //   return Axios.put(`/reviews/${review_id}/report`)
  //     .then(result => {
  //       expect(result.data).toBe("")
  //     })
  // })

  it('should mark a review as reported', () => {
    var review_id = 1136187 // <--- just some random valid review id
    return Axios.put(`/reviews/${1136187}/report`)
      .then(result => {
        expect(result.data).toBe("")
      })
  })
})
