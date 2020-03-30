var Token = require('../models/token')
var UserActivity = require('../models/user_activity')
var Activity = require('../models/activity')
var res_factory = require('../common/res_factory')
var date = require("silly-datetime");

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
    }, function (err, users) {
      if (err) {
        res.json(res_factory.err_res)
        return
      }
      if(users.length == 0){
         res.json(res_factory.create_res(0, '成功'))
      }
      Activity.find({
        activity_id: {$in: users[0].activity_ids}
      },function (err, activities){
         if (err || activities.length == 0) {
            res.json(res_factory.err_res)
         return
        }
        var current_date = date.format(new Date(),'YYYYMMDD')
         for(var i = 0; i < activities.length; ++i){
          if(current_date > activities[i].datetime)
            activities[i].expired_date = true
         }
         res.json(res_factory.create_res(0, '成功', activities))
      })

     
    })
  })
}