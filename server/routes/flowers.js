const router = require('express').Router();     

module.exports = (pool) => {
  router.get('/', (req, res ,next)=> {
    const query = `SELECT * FROM flowers`;
    console.log('asuk router')
    pool.query(query, (err, flowers)=>{
        if(err) return console.error(err);
        console.log("masukkk")
        res.status(200).json(flowers.rows);
    })
  })

  router.post('/', (req, res,next) => {
    const query = `INSERT INTO flowers(name, description, price, stock, images, review_total, sold_total) VALUES($1, $2, $3, $4, $5, $6, $7)`
    
    const {
      name,
      description,
      price,
      stock,
      images,
      review_total,
      sold_total
    } = req.body;
    console.log(name)
    const body = [name, description, price, stock, images, review_total, sold_total];
    pool.query(query, body, (err, data) => {
      if(err) {
        console.log('masuk')
        return console.error(err)
      };
      console.log('a')
      res.status(200).json(req.body)
      console.log('b')
    })
  })

  return router;
};
