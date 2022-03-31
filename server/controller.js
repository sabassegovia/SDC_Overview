const axios = require("axios")
const {configureOptions} = require("./helper.js")

// const configureOptions = (req) => {
//   console.log(process.env.TOKEN)
//   const options = {
//     baseURL: "https://app-hrsei-api.herokuapp.com/api/fec2/rfp",
//     headers: {
//       authorization: process.env.TOKEN,
//     },
//   }
//   options.url = req.url
//   options.method = req.method
//   return options
// }

const get = (req, res) => {
  console.log('im here in get')
  console.log(configureOptions(req))
  res.send('hello from blah')
}

const post = (req, res) => {
  console.log('im here in get')
  res.send('hello from blah')
}

const products = {
  get: (req, res) => {
    console.log('hello im here in the products.get')
    console.log(configureOptions(req))
    res.send('im back from products.get')
  }
}

const reviews = {
  get: (req, res) => {
    console.log('hello im here in the reviews.get')
    res.send('im back from reviews.get')
  }
}

const qa = {
  get: (req, res) => {
    console.log('hello im here in the qa.get')
    res.send('im back from qa.get')
  },

  post: (req, res) => {
    console.log('hello im here inthe qa.post')
    res.send(' im back fromthe qa.post')
  }
}

const test = {
  get: (req, res) => {
    console.log('hello im here in test.get')

    console.log(configureOptions(req))
    res.status(200).send('Hello World!'+ process.env.TOKEN)
  }
}

module.exports = {
  products,
  reviews,
  qa,
  test,
  get,
}