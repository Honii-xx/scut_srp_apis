var Token = require('../models/token')
var User = require('../models/user')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  Token.deleteOne({
    token: req.body.token
  }, function(err) {
    if (err) {
      res.json(res_factory.err_res)
      return
    }
    res.json(res_factory.create_res(0, '退出成功'))
    return
  });
}