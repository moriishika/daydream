var express = require('express');
var router = express.Router();

module.exports = (pool) => {
  router.get('/', (req, res ,next)=> {
    const query = `SELECT * FROM flowers`;
    pool.query(query, (err, flowers)=>{
        if(err) return console.error(err);
        res.status(200).json(flowers.rows);
    })
  })
  return router;
};
