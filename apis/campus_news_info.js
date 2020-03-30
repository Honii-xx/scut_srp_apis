var Token = require('../models/token')
var CampusNews = require('../models/campus_news')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  Token.find({
    token: req.headers.authorization
  }, function (err, ts) {
    if (err || ts.length == 0) {
      res.json(res_factory.err_res)
      return
    }
    CampusNews.find({
      news_id: req.params.id
    }, function (err, news) {
      if (err || news.length == 0) {
        res.json(res_factory.err_res)
        return
      }
      console.log(news[0])
      res.json(res_factory.create_res(0, '成功', news[0]))
    })
  })
}