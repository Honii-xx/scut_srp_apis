var Token = require('../models/token')
var UserActivity = require('../models/user_activity')
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
    UserActivity.find({
      user_id: ts[0].student_id
    }, function (err, activities) {
      if (err) {
        res.json(res_factory.err_res)
        return
      }
      if (activities.length == 0) {
        var user_act = new UserActivity({
          user_id: ts[0].student_id,
          activity_ids: [req.params.id]
        })
        user_act.save(function (err, ua) {
          if (err) {
            return res.json(res_factory.err_res)
          }
          Activity.updateOne({ activity_id: req.params.id }, { number: 1 }, {}, function (err) {
            if (err) {
              res.json(res_factory.err_res)
              return
            }
            return res.json(res_factory.create_res(0, '成功'))
          })
        })
        return
      }
      UserActivity.updateOne({
        user_id: ts[0].student_id
      }, {
        $addToSet: {
          activity_ids: req.params.id
        }
      }, {}, function (err) {
        if (err) {
          res.json(res_factory.err_res)
          return
        }
        Activity.updateOne({ activity_id: req.params.id }, { $inc: { number: 1 } }, {}, function (err) {
          if (err) {
            res.json(res_factory.err_res)
            return
          }
        })
        res.json(res_factory.create_res(0, '成功'))
      })

    })
  })
}