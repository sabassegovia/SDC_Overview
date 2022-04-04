exports.configureOptions = (req) => {

  const options = {
    headers: {
      authorization: process.env.TOKEN,
    },
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/rfp" + req.url,
    method: req.method,
    // params: req.query,
    data: req.body
  }
<<<<<<< HEAD
// console.log(process.env.TOKEN, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  // console.log(options, '<<<<<<<<<<<<<<<<<<<<<<')
=======
  console.log(req.method)
  // console.log(req.body)

  console.log(options.url, '<<<<<<<<<<<<<<<<<<<<<<')
>>>>>>> ac28fdf0ff9361870297ab52426bd2a9b6440482
  return options;
};

//req.url adds all the params at the end...redundant