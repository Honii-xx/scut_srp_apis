var mongoose = require('../common/db')

var campusNewsSchema = new mongoose.Schema({
  news_id: String,
  title: String,
  content: String,
  datetime: String
})

campusNewsSchema.statics.findAll = function(callback) {
  this.find({news_id:{$exists:true}}, callback)
}

campusNewsSchema.statics.findByNewsID = function(id, cb) {
  this.find({news_id: id}, cb)
}


var CampusNews = mongoose.model('CampusNews', campusNewsSchema)
 
module.exports = CampusNews