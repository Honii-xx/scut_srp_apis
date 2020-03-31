var mongoose = require('../common/db')

var activitySchema = new mongoose.Schema({
  activity_id: String,
  url: String,
  title: String,
  description: String,
  address: String,
  number: Number,
  datetime: String,
  expired_date:{
  	type: Boolean,
  	default: false
  }
})

activitySchema.statics.findAll = function(callback) {
  this.find({activity_id:{$exists:true}}, callback)
}

activitySchema.statics.findByActivityID = function(id, cb) {
  this.find({activity_id: id}, cb)
}



var Activity = mongoose.model('Activity', activitySchema)
 
module.exports = Activity