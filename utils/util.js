var server_url = "https://test.apilab.cn/v1";

/**
 * 发送request请求
 * @param {请求url，会提供server_url} url 
 * @param {请求数据} data 
 * @param {请求方式} method 
 * @param {接口调用成功的回调函数} doSuccess 
 * @param {接口调用失败的回调函数} doFail 
 * @returns res
 */
function request(url, data, method,callback) {
  console.log("发送的数据：",data)
  wx.request({
    url: server_url + url,
    method: method,
    data: data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      callback && callback(res.data);
      console.log("成功接收的数据：",res.data)
    },
    fail() {
    }
  })
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  server_url: server_url,
  request: request,
  formatTime: formatTime
}