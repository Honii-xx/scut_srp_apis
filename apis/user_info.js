var Token = require('../models/token')
var User = require('../models/user')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  Token.find({
    token: req.headers.authorization
  }, function (err, ts) {
    if (err || ts.length == 0) {
      res.json(res_factory.err_res)
      return
    }
    User.find({
      student_id: ts[0].student_id
    }, function (err, users) {
      if (err || users.length == 0) {
        res.json(res_factory.err_res)
        return
      }
      console.log(users[0])
      res.json(res_factory.create_res(0, '成功', users[0]))
    })
  })
}