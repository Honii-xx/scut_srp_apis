var Activity = require('../models/activity')
var UserActivity = require('../models/user_activity')
var uuidv4 = require('uuid/v4')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  Activity.deleteOne({
    activity_id: req.params.id
  }, function (err) {
    if (err) {
      console.log('1')
      res.json(res_factory.err_res)
      return
    }
    UserActivity.update({
      user_id: { $exist: true }
    }, { $pull: { activity_ids: req.params.id } }, err => {
      return res.json(res_factory.create_res(0, '成功'))
    })
  });

}