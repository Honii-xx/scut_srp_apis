var express = require('express');
var router = express.Router();
var do_login = require('../apis/login')
var do_token_validate = require('../apis/token_validate')

router.post('/login', function(req, res, next) {
  do_login(req, res, next)
})

router.post('/token_validate', function(req, res, next) {
  do_token_validate(req, res, next)
})

module.exports = router;
