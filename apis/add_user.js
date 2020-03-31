var User = require('../models/user')
var res_factory = require('../common/res_factory')


function add(user) {
  User.find({
    $or: [
      { personal_id: user.personal_id },
      { student_id: user.student_id }
    ]
  }, function (err, users) {
    if (err || users.length != 0) {
      return
    }
    var reg_user = new User({
      username: user.username,
      password: user.password,
      name: user.name,
      gender: user.gender,
      birth_year: user.birth_year,
      birth_month: user.birth_month,
      birth_day: user.birth_day,
      personal_id: user.personal_id,
      student_id: user.student_id,
      start_year: user.start_year,
      end_year: user.end_year,
      department: user.department,
      major: user.major,
      class: user.class,
      phone: user.phone,
      email: user.email,
      company: user.company,
      company_address: user.company_address,
      alumni_association: user.alumni_association,
      other: user.other
    })
    reg_user.save(function (err) {
      if (err) {
        return
      }
    })
  })

}

module.exports = function (req, res, next) {
  for (i in req.body) {
    var user = req.body[i]
    add(user)
  }
  res.json(res_factory.create_res(0, '成功'))
}