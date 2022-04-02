import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components'
import 'jest-styled-components'
import axios from "axios"
import {Axios} from "../client/src/AxiosConfig.js"


// describe('contacting the server test', done => {
//   it('should respond back with Hello World', () => {
//     return Axios.get('/test')
//     .then(result => {
//       expect(result.data).toBe('Hello World!')
//     })
//   })
// });

// describe('contacting the API for products', done => {
//   let params = {}
//   it('should respond back with an array of products', () => {
//     return Axios.get('/products', {params})
//     .then(result => {

//       expect(Array.isArray(result.data)).toBeTruthy()
//     })
//   })

//   it('should respond back with the correct number of products', () => {
//     var count = 10
//     params.count = count
//     return Axios.get('/products', {params})
//     .then(result => {
//       expect(result.data).toHaveLength(count)
//     })
//   })

//   it('should respond back with the correct product id', () => {
//     var id = 65631
//     return Axios.get(`/products/${id}`)
//     .then(result => {
//       expect(result.data).toEqual({
//           "id": 65631,
//           "campus": "rfp",
//           "name": "Camo Onesie",
//           "slogan": "Blend in to your crowd",
//           "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//           "category": "Jackets",
//           "default_price": "140.00",
//           "created_at": "2022-03-29T15:08:08.445Z",
//           "updated_at": "2022-03-29T15:08:08.445Z",
//           "features": [
//               {
//                   "feature": "Fabric",
//                   "value": "Canvas"
//               },
//               {
//                   "feature": "Buttons",
//                   "value": "Brass"
//               }
//           ]
//       })
//     })
//   })

//   it('should respond back with styles of that product', () => {
//     var id = 65631
//     return Axios.get(`/products/${id}/styles`, {params})
//     .then(result => {
//       expect(result.data.results[0].style_id).toBe(404874)
//     })
//   })

//   it('should respond back an array of related products', () => {
//     var id = 65631
//     return Axios.get(`/products/${id}/related`, {params})
//     .then(result => {
//       expect(Array.isArray(result.data)).toBeTruthy()
//     })
//   })

// })

// describe('contacting the API for reviews', done => {
//   const params = {}
//   it('should not respond back with reviews unless product_id is specified', () => {
//     return Axios.get(`/reviews`, {params})
//     .then(result => {

//     })
//     .catch(err => {
//       expect(err).toMatch('error')
//     })
//   })

//   it('should respond back with an Array of reviews if product_id IS specified', () => {
//     params.product_id = 65631
//     return Axios.get(`/reviews`, {params})
//     .then(result => {
//       expect(Array.isArray(result.data.results)).toBeTruthy()
//     })
//   })

//   it('should respond back with the proper number of reviews', () => {
//     params.product_id = 65631
//     params.count = 3
//     return Axios.get(`/reviews`, {params})
//     .then(result => {
//       expect(result.data.count).toBe(3)
//     })
//   })

//   it('should respond back with the correct page of results', () => {
//     params.product_id = 65631
//     params.page = 2
//     params.count = 3
//     return Axios.get(`/reviews`, {params})
//     .then(result => {
//       expect(result.data.page).toBe((params.page - 1) * (params.count))
//     })
//   })

//   it('it should retrieve meta data of the reviews of a product that includes ratings', () => {
//     params.product_id = 65631
//     return Axios.get(`/reviews/meta`, {params})
//     .then(result => {
//       expect(result.data).toHaveProperty('ratings')
//     })
//   })
//   it('it should retrieve meta data of the reviews of a product that includes recommended', () => {
//     params.product_id = 65631
//     return Axios.get(`/reviews/meta`, {params})
//     .then(result => {
//       expect(result.data).toHaveProperty('recommended')
//     })
//   })

// });

// describe('post a review to the API', done => {
//   var params = {
//     product_id: 65631,
//     rating: 5,
//     summary: 'it was ok'
//   }
//   it('should NOT post a review that does not have all the proper fields', () => {


//     return Axios.post('/reviews')
//     .then(result => {
//       expect(result.data.message).toBe('Request failed with status code 422')
//     })
//   })

//   it('should POST a review that DOSE have all the proper fields', () => {
//     var body = {
//       "product_id": 65631,
//       "count":10,
//       "rating": 4,
//       "summary": "was meh",
//       "body": "pretty meh i but could be better",
//       "recommend": true,
//       "name": "Bob Bloblaw",
//       "email": "bobbloblaw@gmail.com",
//       "photos": [],
//       "characteristics": {}
//   }

//     return Axios.post('/reviews', body)
//     .then(result => {
//       expect(result.data).toBe('Created')
//     })
//   })
// });


// describe('it should be able to mark a review as helpful or report', done => {

//   // it('should not mark a review as being helpful if no review is specified', () => {
//   //   var review_id = null // <--- just some random valid review id
//   //   return Axios.put(`/reviews/${review_id}/helpful`)
//   //     .then(result => {
//   //       expect(result.data).toBe("")
//   //     })
//   // })

//   it('should mark a review as being helpful', () => {
//     var review_id = 1136187 // <--- just some random valid review id
//     return Axios.put(`/reviews/${1136187}/helpful`)
//       .then(result => {
//         expect(result.data).toBe("")
//       })
//   })

//   // it('should not mark a review as reported if no review is specified', () => {
//   //   var review_id = null // <--- just some random valid review id
//   //   return Axios.put(`/reviews/${review_id}/report`)
//   //     .then(result => {
//   //       expect(result.data).toBe("")
//   //     })
//   // })

//   it('should mark a review as reported', () => {
//     var review_id = 1136187 // <--- just some random valid review id
//     return Axios.put(`/reviews/${1136187}/report`)
//       .then(result => {
//         expect(result.data).toBe("")
//       })
//   })
// })


// describe('contacting the API for questions', done => {
//   var params = {
//     product_id: 65631,
//   }
//   it('should retrieve a list of questions for a particular product', () => {
//     return Axios.get('/qa/questions', {params})
//       .then(result => {
//         expect(result.data.results[0]).toHaveProperty("question_id")
//       })
//   })
//   it('should retrieve the correct number of questions if specified', () => {
//     params.count = 1
//     return Axios.get('/qa/questions', {params})
//       .then(result => {
//         expect(result.data.results.length).toBeLessThanOrEqual(params.count)
//       })
//       .catch(err => {
//       })
//   })

//   it('should retrieve the correct page of questions if specified', () => {
//     params.count = 1
//     var params2 = {
//       product_id: 65631,
//       count: 1,
//       page: 2,
//     }
//     Promise.all([Axios.get('/qa/questions', {params}), Axios.get('/qa/questions', {params2})])
//       .then(result => {
//         expect(result[0].data).not.toBe(result[1].data)
//       })
//       .catch(err => {
//       })
//   })
// })

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
  it('should retrieve different answers if we specify a different page', () => {
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
})

