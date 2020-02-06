var mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/scutVoyager'

mongoose.set('useCreateIndex', true)
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, '数据库连接错误...'))
db.once('open', function() {
  console.log("数据库连接成功...")
})

module.exports = mongoose