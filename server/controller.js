const axios = require("axios")

const configureOptions = (req) => {
  console.log(process.env.TOKEN)
  const options = {
    baseURL: "https://app-hrsei-api.herokuapp.com/api/fec2/rfp",
    headers: {
      authorization: process.env.TOKEN,
    },
  }
  options.url = req.url
  options.method = req.method
  return options
}


const products = {
  get: (res, req) => {
    console.log('hello im here in the products.get')

    res.send('im back from products.get')
  }
}

const reviews = {
  get: (res, req) => {
    console.log('hello im here in the reviews.get')
    res.send('im back from reviews.get')
  }
}

const qa = {
  get: (res, req) => {
    console.log('hello im here in the qa.get')
    res.send('im back from qa.get')
  },

  post: (req, req) => {
    console.log('hello im here inthe qa.post')
    res.send(' im back fromthe qa.post')
  }
}

module.exports = {
  products,
  reviews,
  qa,
}