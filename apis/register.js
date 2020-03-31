var User = require('../models/user')
var res_factory = require('../common/res_factory')

module.exports = function(req, res, next) {
  User.find({
    $or: [
      {personal_id: req.body.personal_id},
      {student_id: req.body.student_id}
    ]
  }, function(err, users) {
    if (err) {
      res.json(res_factory.err_res)
      return
    }
    if (users.length != 0) {
      res.json(res_factory.create_res(1, '用户已注册'))
      return
    }
    var reg_user = new User({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      gender: req.body.gender,
      birth_year: req.body.birth_year,
      birth_month: req.body.birth_month,
      birth_day: req.body.birth_day,
      personal_id: req.body.personal_id,
      student_id: req.body.student_id,
      start_year: req.body.start_year,
      end_year: req.body.end_year,
      department: req.body.department,
      major: req.body.major,
      class: req.body.class,
      phone: req.body.phone,
      email: req.body.email,
      company: req.body.company,
      company_address: req.body.company_address,
      alumni_association: req.body.alumni_association,
      other: req.body.other
    })
    reg_user.save(function(err, user) {
      if (err) {
        res.json(res_factory.err_res)
        return
      } else {
        res.json(res_factory.create_res(0, '注册成功'))
        return
      }
    })
  })
}