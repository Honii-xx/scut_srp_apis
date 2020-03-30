var mongoose = require('../common/db')

var alumniNewsSchema = new mongoose.Schema({
  news_id: String,
  title: String,
  content: String,
  url: String,
  datatime: String
})

alumniNewsSchema.statics.findAll = function(callback) {
  this.find({news_id:{$exists:true}}, callback)
}

alumniNewsSchema.statics.findByNewsID = function(id, cb) {
  this.find({news_id: id}, cb)
}


var AlumniNews = mongoose.model('AlumniNews', alumniNewsSchema)
 
module.exports = AlumniNews