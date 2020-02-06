var express = require('express');
var router = express.Router();

var do_register = require('../apis/register')

router.post('/register', function(req, res, next) {
  do_register(req, res, next)
})


module.exports = router;
