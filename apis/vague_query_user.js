var User = require('../models/user')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  var paramArr = []
  for (var i in req.body) {
    var obj = {}
    obj[i] = new RegExp(req.body[i], 'i')
    if (i === 'start_year' || i === 'end_year') {
      obj[i] = req.body[i]
    }
    paramArr.push(obj)
  }
  console.log(paramArr)
  User.find({ $and: paramArr }, function (err, users) {
    if (err || users.length == 0) {
      res.json(res_factory.err_res)
      return
    }
    res.json(res_factory.create_res(0, '成功', users))
  })
}