var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var usersRouter = require('./routes/users');
var commonRouter = require('./routes/common')
var Token = require('./models/token')
var res_factory = require('./common/res_factory')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res, next) {
  var white_list = ['/common/login', '/users/register']
  if (white_list.indexOf(req.url) >= 0) {
    return next();
  }
  Token.find({
    token: req.headers.authorization
  }, function(err, tokens) {
    if (err) {
      res.json(res_factory.err_res)
      return
    }
    if (tokens.length == 0 ) {
      console.log('tokenwuxiao')
      res.json(res_factory.create_res(1, 'token无效'))
    } else {
      next()
    }
  })
})

app.use('/users', usersRouter);
app.use('/common', commonRouter)

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
