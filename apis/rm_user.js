var User = require('../models/user')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  User.deleteOne({
    student_id: req.params.id
  }, function (err) {
    if (err) {
      res.json(res_factory.err_res)
      return
    }
    res.json(res_factory.create_res(0, '成功'))
    return
  });
}