var express = require('express');
var router = express.Router();

var add_user = require('../apis/add_user')
var rm_user = require('../apis/rm_user')
var post_alumni_news = require('../apis/post_alumni_news')
var post_activity = require('../apis/post_activity')

router.post('/add_user', function(req, res, next) {
  add_user(req, res, next)
})

router.get('/rm_user/:id', function(req, res, next) {
  rm_user(req, res, next)
})

router.post('/post_alumni_news', function(req, res, next) {
  post_alumni_news(req, res, next)
})

router.post('/post_activity', function(req, res, next) {
  post_activity(req, res, next)
})

module.exports = router;
