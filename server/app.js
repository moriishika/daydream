var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const {Pool} = require('pg');
var fileUpload = require('express-fileupload')
var cors = require('cors')
const pool = new Pool({
  user : 'postgres',
  host : 'localhost',
  database : 'daydream',
  password : 'lala123',
  port : 5432
})

var app = express();
app.use(cors())
app.use(fileUpload())
app.use(logger('dev'));
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index')(pool);
var usersRouter = require('./routes/flowers')(pool);

app.use('/', indexRouter);
app.use('/flowers', usersRouter);

module.exports = app;