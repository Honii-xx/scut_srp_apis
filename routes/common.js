var express = require('express');
var router = express.Router();
var do_login = require('../apis/login')
var do_token_validate = require('../apis/token_validate')
var do_logout = require('../apis/logout')
var query_user = require('../apis/query_user')
var vague_query_user = require('../apis/vague_query_user')

router.post('/login', function (req, res, next) {
  do_login(req, res, next)
})

router.post('/token_validate', function (req, res, next) {
  do_token_validate(req, res, next)
})

router.post('/logout', function (req, res, next) {
  do_logout(req, res, next)
})

router.post('/query_user', function (req, res, next) {
  query_user(req, res, next)
})

router.post('/vague_query_user', function (req, res, next) {
  vague_query_user(req, res, next)
})

var multer = require('multer')
var fs = require('fs')
var res_factory = require('../common/res_factory')
var uuidv4 = require('uuid/v4')
const pathLib = require("path")
var upload = multer({ dest: 'public/images/' })
router.post('/upload', upload.single('myFile'), function (req, res, next) {
  var name = uuidv4() + pathLib.parse(req.file.originalname).ext
  fs.rename(req.file.path, 'public/images/' + name, function(err) {
    if (err) {
      res.json(res_factory.err_res)
    } else {
      res.json(res_factory.create_res(0, '成功', {
        url: 'images/' + name
      }))
    }
  })
})

module.exports = router;
