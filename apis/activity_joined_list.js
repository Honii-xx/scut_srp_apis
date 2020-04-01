var UserActivity = require('../models/user_activity')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  UserActivity.find({
    user_id: { $exists: true }
  }, function (err, activities) {
    if (err || activities.length == 0) {
      res.json(res_factory.err_res)
      return
    }
    var joined_list = []
    for (var i in activities) {
      if (activities[i].activity_ids.indexOf(req.params.id) >= 0) {
        joined_list.push(activities[i].user_id)
      }
    }
    res.json(res_factory.create_res(0, '成功', joined_list))
  })
}