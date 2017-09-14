// 加密模块
const crypto = require('crypto');

exports.md5 = (str) => {
	let  md5sum = crypto.createHash('md5');
	md5sum.update(str);
	str = md5sum.digest('hex');
	return str;
}
