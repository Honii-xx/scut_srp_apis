var User = require('../models/user')
var res_factory = require('../common/res_factory')
const nodemailer = require("nodemailer")

async function send(user, title, content, receivers) {
  let transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    secure: true,
    auth: {
      user: 'scut_srp_test@163.com',
      pass: 'WKHJUBFWPUYNNBEE'
    }
  });

  transporter.sendMail({
    from: 'scut_srp_test@163.com',
    to: receivers.join(','),
    subject: title,
    text: content
  });
}

module.exports = function (req, res, next) {
  User.find({ student_id: { $in: req.body.receivers } }, function (err, users) {
    if (err) {
      res.json(res_factory.err_res)
      return
    }
    var receivers = []
    for (var i in users) {
      receivers.push(users[i].email)
    }
    send(users[i], req.body.title, req.body.content, receivers)

    res.json(res_factory.create_res(0, '成功', users))
  })
}