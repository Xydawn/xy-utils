Date.prototype.formatDate = function(value) {
  if (value == null || value == 0) {
    return ''
  }
  var crtTime = new Date(value)
  return crtTime.dateFtt('yyyy-MM-dd HH:mm:ss')
}

Date.prototype.dateFtt = function(date) {
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  let fmt
  if (/(y+)/.test(this)) {
    fmt = this.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = this.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
