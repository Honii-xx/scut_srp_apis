var mongoose = require('../common/db')

var tokenSchema = new mongoose.Schema({
  student_id: String,
  token: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600
  }
})

var Token = mongoose.model('Token', tokenSchema)
 
module.exports = Token