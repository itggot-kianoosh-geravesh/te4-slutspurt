var express = require('express');
var router = express.Router();
const {
  Client
} = require('pg')
const client = new Client({
  connectionString: 'postgressql://localhost:5432/xsidb',
})

client.connect()


/* GET posts. */
router.get('/', function (req, res, next) {
  client.query('SELECT * FROM posts', (error, results) => {
    error ? console.log(error) : res.json(results.rows.map(post => post));
  })
});

/* POST posts/new */
router.post('/new', function (req, res, next) {
  client.query(`INSERT INTO posts (msg) VALUES ('${req.body.msg}')`, (error, results) => {
    error ? console.group(error) : res.send(JSON.stringify(results))
  })
})

/* POST posts/remove */
router.post('/remove', function (req, res, next) {
  client.query(`DELETE FROM posts WHERE id = ${req.body.id}`, (error, results) => {
    error ? console.group(error) : res.send(JSON.stringify(results))
  })
})

module.exports = router;