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
  
  });
  return router;
}
