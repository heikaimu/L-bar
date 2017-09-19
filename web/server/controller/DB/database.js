// database.js

const mysql = require('mysql');

// 链接数据库
var coon = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '123456',
	database: 'post_bar'
});

// 查询方法
exports.query = (sql, params, callback) => {
	coon.query(sql, params, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			callback(data);
		}
	});
	// coon.end();
}