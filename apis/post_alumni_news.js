var AlumniNews = require('../models/alumni_news')
var date = require("silly-datetime")
var uuidv4 = require('uuid/v4')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  var news = new AlumniNews({
    news_id: uuidv4(),
    url: req.body.url,
    title: req.body.title,
    content: req.body.content,
    datetime: date.format(new Date(), 'YYYY-MM-DD')
  })
  news.save(function (err, n) {
    if (err) {
      res.json(res_factory.err_res)
      return
    } else {
      res.json(res_factory.create_res(0, '成功'))
      return
    }
  })
}