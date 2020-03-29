var express = require('express');
var router = express.Router();

var do_register = require('../apis/register')
var query_info = require('../apis/user_info')
var edit_info = require('../apis/edit_info')

router.post('/register', function(req, res, next) {
  do_register(req, res, next)
})

router.get('/info', function(req, res, next) {
  query_info(req, res, next)
})

router.post('/edit_info', function(req, res, next) {
  edit_info(req, res, next)
})


module.exports = router;
