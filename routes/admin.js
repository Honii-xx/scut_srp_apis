var express = require('express');
var router = express.Router();

var add_user = require('../apis/add_user')
var rm_user = require('../apis/rm_user')
var post_alumni_news = require('../apis/post_alumni_news')
var post_activity = require('../apis/post_activity')
var activity_joined_list = require('../apis/activity_joined_list')
var user_info_by_id = require('../apis/user_info_by_id')
var edit_info_by_id = require('../apis/edit_info_by_id')
var rm_activity = require('../apis/rm_activity')
var send_email = require('../apis/send_email')

router.post('/send_email', function(req, res, next) {
  send_email(req, res, next)
})

router.get('/rm_activity/:id', function(req, res, next) {
  rm_activity(req, res, next)
})

router.post('/add_user', function (req, res, next) {
  add_user(req, res, next)
})

router.get('/rm_user/:id', function (req, res, next) {
  rm_user(req, res, next)
})

router.post('/post_alumni_news', function (req, res, next) {
  post_alumni_news(req, res, next)
})

router.post('/post_activity', function (req, res, next) {
  post_activity(req, res, next)
})

router.get('/activity_joined_list/:id', function(req, res, next) {
  activity_joined_list(req, res, next)
})

router.get('/user_info_by_id/:id', function(req, res, next) {
  user_info_by_id(req, res, next)
})

router.post('/edit_info_by_id/:id', function(req, res, next) {
  edit_info_by_id(req, res, next)
})

module.exports = router;
