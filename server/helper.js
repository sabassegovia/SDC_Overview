exports.configureOptions = (req) => {
  const options = {
    // baseURL: "https://app-hrsei-api.herokuapp.com/api/fec2/rfp" + req.url,
    headers: {
      authorization: process.env.TOKEN,
    },
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/rfp" + req.url,
    method: req.method,
    params: req.params
  }

  return options;
};