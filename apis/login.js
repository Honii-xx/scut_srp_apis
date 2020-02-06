var Token = require('../models/token')
var User = require('../models/user')
var res_factory = require('../common/res_factory')
var uuidv4 = require('uuid/v4')

module.exports = function (req, res, next) {
  User.find({
    student_id: req.body.username,
    password: req.body.password
  }, function (err, users) {
    if (err) {
      res.json(res_factory.err_res)
      return
    }
    if (users.length == 0) {
      res.json(res_factory.create_res(1, '用户名或密码错误'))
      return
    }
    var token = uuidv4()
    Token.updateOne({student_id: req.body.username}, {$set: {token: token}}, {upsert: true}, function(err) {
      if (err) {
        res.json(res_factory.err_res)
        return
      }
      res.json(res_factory.create_res(0, '登陆成功', {token: token}))
      return
    })
  })
}