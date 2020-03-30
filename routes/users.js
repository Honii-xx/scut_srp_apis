var express = require('express');
var router = express.Router();

var do_register = require('../apis/register')
var query_info = require('../apis/user_info')
var edit_info = require('../apis/edit_info')

var campus_news_list = require('../apis/campus_news')
var campus_news_info = require('../apis/campus_news_info')
var alumni_news_list = require('../apis/alumni_news')
var alumni_news_info = require('../apis/alumni_news_info')
var activity_list = require('../apis/activity')
var activity_info = require('../apis/activity_info')
var user_activity = require('../apis/user_activity')
var join_activity = require('../apis/join_activity')

router.post('/register', function(req, res, next) {
  do_register(req, res, next)
})

router.get('/info', function(req, res, next) {
  query_info(req, res, next)
})

router.post('/edit_info', function(req, res, next) {
  edit_info(req, res, next)
})

router.get('/campus_news/list', function(req, res, next) {
  campus_news_list(req, res, next)
})

router.get('/campus_news/:id', function(req, res, next) {
  campus_news_info(req, res, next)
})

router.get('/alumni_news/list', function(req, res, next) {
  campus_news_list(req, res, next)
})

router.get('/alumni_news/:id', function(req, res, next) {
  campus_news_info(req, res, next)
})

router.get('/activity/list', function(req, res, next) {
  activity_list(req, res, next)
})

router.get('/activity/:id', function(req, res, next) {
  activity_info(req, res, next)
})


router.get('/activity/my', function(req, res, next) {
  user_activity(req, res, next)
})

router.get('/activity/:id', function(req, res, next) {
  join_activity(req, res, next)
})


module.exports = router;
