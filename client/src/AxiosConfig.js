const axios = require("axios")
exports.Axios = axios.create({
  baseURL: 'http://localhost:3000'
});
