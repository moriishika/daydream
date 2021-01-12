var express = require('express');
var router = express.Router();


module.exports = () => {
  router.get('/', (req, res ,next)=> {
    if(res.status(200).json('success'));
  })
  return router;
};