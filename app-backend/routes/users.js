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
client.query('SELECT * FROM users', (err, res) => {
  err === null ? console.log(res) : console.log(err)
  client.end();
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([{
      id: 1,
      name: "test1"
    },
    {
      id: 2,
      name: "test2"
    },
  ])
});

module.exports = router;