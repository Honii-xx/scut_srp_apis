var mongoose = require('../common/db')

var userActivitySchema = new mongoose.Schema({
  user_id: String,
  activity_ids: [String]
})

userActivitySchema.statics.findAll = function(callback) {
  this.find({user_id:{$exists:true}}, callback)
}

userActivitySchema.statics.findByUserID = function(id, cb) {
  this.find({user_id: id}, cb)
}



var UserActivity = mongoose.model('UserActivity', userActivitySchema)
 
module.exports = UserActivity