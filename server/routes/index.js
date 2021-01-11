const bodyParser = require('body-parser')
const express = require('express');
const router = express.Router();        

router.use(bodyParser.urlencoded({
  extended: false
}));
router.use(bodyParser.json());


/* GET home page. */
module.exports = (pool) =>{
  router.get('/', function(req, res, next) {
    pool.query('select * from flowers', (err, result)=>{
      if(err) return console.error(err);
      console.log(result.rows);
      res.status(200).json('Connected')
    })
  });
  return router;
}
