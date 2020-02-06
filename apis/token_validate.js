var Token = require('../models/token')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  Token.find({
    student_id: req.body.student_id,
    token: req.body.token
  }, function(err, tokens) {
    if (err) {
      res.json(res_factory.err_res)
      return
    }
    if (tokens.length == 0 ) {
      res.json(res_factory.create_res(1, 'token无效'))
    } else {
      res.json(res_factory.create_res(0, '验证成功'))
    }
  })
}