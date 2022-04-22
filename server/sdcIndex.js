const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'sabassegovia',
  port: 5432,
  password: 'cowspot!',
  database: 'productsdb'
})

client.connect();

client.query(`select * from products`, (err, res) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(res.rows);
  }
  client.end;
})