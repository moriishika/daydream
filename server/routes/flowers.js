var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = () => {
  router.get('/', (req, res ,next)=> {
    if(res.status(200).json('success'));
  })
  return router;
};
