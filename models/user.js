var mongoose = require('../common/db')

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  gender: Number,
  birth_year: Number,
  birth_month: Number,
  birth_day: Number,
  personal_id: String,
  student_id: String,
  start_year: Number,
  end_year: Number,
  department: String,
  major: String,
  class: String,
  phone: String,
  email: String,
  compony: String,
  compony_address: String,
  alumni_association: String,
  other: String
})

userSchema.statics.findAll = function(callback) {
  //this.find({}, callback)
}

userSchema.statics.findByUsername = function(name, cb) {
  this.find({username: name}, cb)
}

userSchema.statics.findUserLogin = function(name, password, cb) {
  this.find({username: name, password: password, userStop: false}, cb)
}

userSchema.statics.findUserPassword = function(name, mail, phone, callback) {
  //this.find({username: name, userMail: mail, userPhone: phone}, callback)
}

var User = mongoose.model('User', userSchema)
 
module.exports = User