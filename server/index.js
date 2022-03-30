require('dotenv').config();
const express = require('express');
const router = require('./router.js')
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  console.log('im here')
  console.log(process.env.TOKEN)
  res.status(200).send('Hello World!'+ process.env.TOKEN)
})

app.use("https://app-hrsei-api.herokuapp.com/api/fec2/rfp/" ,router)





app.listen(port, () => {
  console.log(`listening on port: ${port}` )
});