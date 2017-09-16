export function getAge(time) {
  var birth = time - 0
  // birth = Date.parse(birth.replace('/-/g', "/"))
  var year = 1000 * 60 * 60 * 24 * 365
  var month = 1000 * 60 * 60 * 24 * 30
  var week = 1000 * 60 * 60 * 24 * 7
  var day = 1000 * 60 * 60 * 24 * 1
  var now = new Date()
  var birthday = new Date(birth)
  if (now - birthday < 0) return ''
  var age = parseInt((now - birthday) / year)
  if (age !== 0) {
    return age + '年'
  } else if (Math.ceil((now - birthday) / month) > 1) {
    return Math.ceil((now - birthday) / month) + '个月'
  } else if (Math.ceil((now - birthday) / week) > 1) {
    return Math.ceil((now - birthday) / week) + '周'
  } else {
    return Math.ceil((now - birthday) / day) + '天'
  }
}

export function getPostTime(time) {
  var birth = time
  var date = birth
  birth = Date.parse(birth)
  var year = 1000 * 60 * 60 * 24 * 365
  var month = 1000 * 60 * 60 * 24 * 30
  var week = 1000 * 60 * 60 * 24 * 7
  var day = 1000 * 60 * 60 * 24 * 1
  var hour = 1000 * 60 * 60
  var min = 1000 * 60
  var now = new Date()
  var birthday = new Date(birth)
  if (now - birthday <= 0) return '刚才'
  var age = parseInt((now - birthday) / year)
  if (age !== 0) {
    return age + '年'
  } else if (Math.ceil((now - birthday) / month) > 1) {
    return date.split('T')[0]
  } else if (Math.ceil((now - birthday) / week) > 1) {
    return date.split('T')[0]
  } else if (Math.ceil((now - birthday) / day) > 1) {
    return Math.ceil((now - birthday) / day) + '天前'
  } else if (Math.ceil((now - birthday) / hour) > 1) {
    return Math.ceil((now - birthday) / hour) + '小时前'
  } else if (Math.ceil((now - birthday) / min) > 1) {
    return Math.ceil((now - birthday) / min) + '分钟前'
  } else {
    return '刚才'
  }
}
