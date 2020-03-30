var Token = require('../models/token')
var User = require('../models/user')
var Activity = require('../models/activity')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  Token.find({
    token: req.headers.authorization
  }, function (err, ts) {
    if (err || ts.length == 0) {
      res.json(res_factory.err_res)
      return
    }
    Activity.find({
      activity_id: req.params.id
    }, function (err, activities) {
      if (err || activities.length == 0) {
        res.json(res_factory.err_res)
        return
      }
      console.log(activities[0])
      res.json(res_factory.create_res(0, '成功', activities[0]))
    })
  })
}