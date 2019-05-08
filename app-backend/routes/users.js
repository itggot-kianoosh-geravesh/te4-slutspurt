var express = require('express');
var router = express.Router();
const {
  Pool,
  Client
} = require('pg')
const connectionString = 'postgressql://localhost:5432/xsidb'

const client = new Client({
  connectionString: connectionString,
})

client.connect().then(_ => {
  console.log("Connected to database!");
}).catch(err => {
  console.log("Could not connect to the database!")
  console.log(err)
});
let result = "Nothing found!"
client.query('SELECT * FROM users', (err, res) => {
  err === null ? result = res.rows : console.log(err)
  client.end();
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(result.map(user => user));
});

module.exports = router;