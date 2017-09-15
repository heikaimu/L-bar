const database = require('./DB/database.js');
const secret = require('./libs/secret.js');
// user.js

// 当前用户信息
exports.currentUser = (req, res) => {
	if (req.session.user) {
		res.send({OK: true, body: req.session.user});
	} else {
		res.send({OK: false, msg: "未登录"});
	};
}

// 登录
exports.login = (req, res) => {
	const user = req.body.user;
	const pwd = secret.md5(req.body.pwd);
	database.query(`SELECT * FROM user WHERE acount = ?`, [user], (data) => {
		const users = data;
		if (users.length !== 0) {
			if (users[0].password === pwd) {
				req.session.user = users[0];
				res.send({
					code: 1,
					is_login: true,
					user_id: users[0].ID,
					user_ifo: users[0]
				});
			} else {
				res.send({code: 0, msg: '账户或密码错误'});
			}
		} else {
			res.send({code: 0, msg: '账户或密码错误'});
		}
	});
}

/**
 * [验证是否账户已存在]
 * params{[string]} user 用户名
 */
 exports.isRegister = (req, res) => {
 	console.log(req)
 	const user = req.body.user;
 	database.query(`SELECT * FROM user WHERE acount = ?`, [user], (data) => {
 		const users = data;
 		if (users.length === 0) {
 			res.send(true);
 		} else {
 			res.send(false);
 		}
 	});
 }

/**
 * [注册接口]
 * params{[object]} {user,pwd,headThumb,nickname,sex,birth,addTime}
 */
 exports.register = (req, res) => {
 	const user = req.body.user;
 	const pwd = secret.md5(req.body.pwd);
 	const headThumb = 'https://avatars2.githubusercontent.com/u/20633425?v=4&s=460';
 	const nickname = req.body.nickname;
 	const sex = req.body.sex;
 	const birth = req.body.birth;
 	const addTime = Date.parse(new Date());

 	const sql = `INSERT INTO user
 	(acount, password, head_thumb, nickname, sex, birth, add_time)
 	VALUES (?, ?, ?, ?, ?, ?, ?)`;
 	database.query(sql, [user, pwd, headThumb, nickname, sex, birth, addTime], (data) => {
 		res.send({
 			code: 1,
 			msg: '注册成功'
 		});
 	});
 }

// 修改密码
exports.changePwd = (req, res) => {
	if (req.session.user) {
		const oldPwd = secret.md5(req.body.oldPwd);
		const newPwd = secret.md5(req.body.newPwd);
    const userId = req.session.user.ID;
		if (req.session.user.password === oldPwd) {
			const queryStr = "UPDATE user SET password = ? WHERE ID = ?";
			database.query(queryStr, [newPwd, userId], (data) => {
				res.send({code: 1, msg: "密码修改成功"});
			});
		} else {
			res.send({code: 0, msg: "原始密码错误"});
		}
	} else {
		res.send({code: 0, msg: "请登录"});
	}
}

// 修改头像
exports.changeHeadThumb = (req, res) => {
	if (req.session.user) {
		const imgSrc = req.query.imgSrc;
		const userId = req.session.user.ID;
		const sql = `UPDATE user SET head_thumb = ? WHERE ID = ?`;
    database.query(sql, [imgSrc, userId], () => {
      res.send({code: 1, msg: "修改成功"});
    });
	} else {
    res.send({code: 0, msg: "请登录"});
	}
}

// 编辑资料（昵称）
exports.changeNickname = (req, res) => {
	if (req.session.user) {
		const nickname = req.body.nickname;
    const userId = req.session.user.ID;
		const queryStr = `UPDATE user SET nickname = ? WHERE ID = ?`;
		database.query(queryStr, [nickname, userId], (data) => {
			req.session.user.nickname = nickname;
			res.send({code: 1, msg: "修改成功"});
		});
	} else {
		res.send({code: 0, msg: "请登录"});
	}
}

// 注销
exports.logout = (req, res) => {
	if (req.session.user) {
		req.session.user = false;
		res.send({OK: true, msg: "注销成功"});
	}
}