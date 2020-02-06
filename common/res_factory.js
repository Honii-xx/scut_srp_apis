var err_res = {
  status: 1,
  message: '系统错误'
}

var create_res = function(status, message, data) {
  return {
    status: status,
    message: message,
    data: data
  }
}

exports.err_res = err_res
exports.create_res = create_res