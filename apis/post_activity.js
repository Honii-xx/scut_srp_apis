var Activity = require('../models/activity')
var uuidv4 = require('uuid/v4')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  var act = new Activity({
    activity_id: uuidv4(),
    url: req.body.url,
    title: req.body.title,
    description: req.body.description,
    address: req.body.address,
    number: 0,
    datetime: req.body.datetime
  })
  act.save(function (err, n) {
    if (err) {
      res.json(res_factory.err_res)
      return
    } else {
      res.json(res_factory.create_res(0, '成功'))
      return
    }
  })
}