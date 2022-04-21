require('dotenv').config();
const axios = require('axios')
const {configureOptions} = require("./helper.js")
const cors = require('cors')
// const path = require('path')
const compression = require('compression')

const express = require('express');
// const router = require('./router.js')
const app = express();
app.use(compression());
app.use(express.json());
app.use(cors())
// app.set('view engine', 'ejs');

const port = 3000;

app.use(express.static(__dirname + "/../client/"))


// app.get(`/`, (req, res) => {
//   console.log('generic hit')
//   res.send('hi')
//   // res.sendFile("/home/rphpandan/hackreactor/rfp2202/GOC-FEC/FEC" + "/client/index.html")
// })

app.get('/test', (req, res) => {
  res.send("Hello World!")
})


app.get("/*", (req, res) => {
  // console.log(req.body)
     axios(configureOptions(req))
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.send(err)
      })
})
app.put("/*", (req, res) => {
   axios(configureOptions(req))
    .then((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      res.send(err.data)
    })
})
app.post("/*", (req, res) => {
  // console.log('im here in post')
  // console.log(req.body)
   axios(configureOptions(req))
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log('im broken')
      res.send(err)
    })
})
app.listen(port, () => {
  console.log('listening on port:',port )
})