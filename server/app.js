const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const { Pool } = require('pg');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser')
const pool = new Pool({
  user : 'postgres',
  host : 'localhost',
  database : 'daydream',
  password : 'lala123',
  port : 5432
})

const indexRouter = require('./routes/index')(pool);
const flowersRouter = require('./routes/flowers')(pool);
// const reviewsRouter = require('./routes/flowers')(pool);

const app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end(JSON.stringify(req.body, null, 2))
})

app.use('/', indexRouter);
app.use('/flowers', flowersRouter);
// app.use('/reviews', )

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
