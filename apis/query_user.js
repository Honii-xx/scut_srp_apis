var User = require('../models/user')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  User.find(req.body, function (err, users) {
    if (err || users.length == 0) {
      res.json(res_factory.err_res)
      return
    }
    res.json(res_factory.create_res(0, '成功', users))
  })
}