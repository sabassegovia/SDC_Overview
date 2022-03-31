require('dotenv').config();
const axios = require('axios')
const {configureOptions} = require("./helper.js")
const cors = require('cors')
// const path = require('path')



const express = require('express');
const router = require('./router.js')
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.static(__dirname + "../src/"))

const port = 3000;

// app.use("/" , router)

app.get('/test', (req, res) => {
  console.log('im here')
  console.log(process.env.TOKEN)
  res.status(200).send('Hello World!'+ process.env.TOKEN)
})


app.get("/*", (req, res) => {
     console.log('im here')
     console.log(req.query, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    //  console.log(process.env.TOKEN)
    //  console.log(configureOptions(req))

     axios(configureOptions(req))
      .then((result) => {
        console.log(result.data)
        res.status(200).send(result.data)

      })
      .catch((err) => {
        // console.log(err)
        res.send(err)
      })
})
// app.put("/*", (req, res) => {
//   //  console.log('im here')
//   //  console.log(process.env.TOKEN)
//   //  console.log(configureOptions(req))

//    axios(configureOptions(req))
//     .then((result) => {
//       console.log(result.data)
//       res.status(200).send(result.data)

//     })
//     .catch((err) => {
//       console.log(err)
//       res.send(err)
//     })
// })
// app.post("/*")

app.listen(port, () => {
  console.log(`listening on port: ${port}` )
})