const router = require('express').Router();     

module.exports = (pool) => {
  router.get('/', (req, res ,next)=> {
    const query = `SELECT * FROM flowers`;
    pool.query(query, (err, flowers)=>{
        if(err) return console.log(err);
        res.status(200).json(flowers.rows);
    })
  })

  router.post('/', (req, res,next) => {
    // const query = `INSERT INTO flowers(name, description, price, stock, images, review_total, sold_total) VALUES($1, $2, $3, $4, $5, $6, $7)`
    const query =  `INSERT INTO flowers(name, images) VALUES($1, $2)`
    
    // const {
    //   name,
    //   description,
    //   price,
    //   stock,
    //   images,
    //   review_total,
    //   sold_total
    // } = req.body;
    
    // const body = [name, description, price, stock, images, review_total, sold_total];
    const {
     name
    } = req.body

    console.log(req.files)
    const body = [name]
    console.log(body)
    pool.query(query, body, (err, data) => {
      if(err) return console.log(err);
      console.log(req.body)
      res.status(200).json(req.body)
    })
  })

  return router;
};
