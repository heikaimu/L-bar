// reply.js
const database = require('./DB/database');
const publicJs = require('./libs/public');

// 回复列表
exports.list = (req, res) => {
	const postBarID = req.query.post_bar_id;
	const queryStr = `
	SELECT a.*, b.acount, b.nickname, b.head_thumb,@y:=@y+1 as floor
	FROM (SELECT @y := 0) c,reply AS a LEFT JOIN user AS b ON a.user_id = b.ID
	WHERE a.post_bar_id = ?
	ORDER BY a.add_time
	`;
	database.query(queryStr, [postBarID], (data) => {
		let replyItems = data;
		res.send({
			code: 1,
			data: {
				list: replyItems
			}
		});
		// for (let i = 0; i < replyItems.length; i++) {
		// 	const replyItem = replyItems[i];
		// 	const queryStr = "SELECT sub_reply.*, user.acount, nickname, head_thumb FROM sub_reply INNER JOIN user ON sub_reply.user_id = user.ID WHERE sub_reply.reply_id = " + replyItem.ID;
		// 	database.query(queryStr, [], (data) => {
		// 		replyItem.sub_reply = data;
		// 		if (i === replyItems.length - 1) {
		// 			res.send({OK: true, body: replyItems});
		// 		}
		// 	});
		// }
	});
}

// 发表回复
exports.postReply = (req, res) => {
	// 判断当前是否登录
	if (req.session.user) {
		const details = req.body.msg;
        const img = req.body.img;
		const addTime = publicJs.getNowDate();
		const postBarID = req.body.postBarId;
		const userID = req.session.user.ID;
		const sql = `INSERT INTO reply
		(details, img, add_time, post_bar_id, user_id)
		VALUES (?, ?, ?, ?, ?)`;
		database.query(sql, [details, img, addTime, postBarID, userID], (data) => {
			res.send({code: 1, msg: "回复成功"});
		});
	} else {
		res.send({code: 0, msg: "请登录"});
	};
}

// 回复->回复
exports.subReply = (req, res) => {
	// 判断当前是否登录
	if (req.session.user) {
		const details = req.body.subReply;
		const addTime = publicJs.getNowDate();
		const replyID = req.body.replyID;
		const userID = req.session.user.ID;
		const queryStr = "INSERT INTO sub_reply (`details`, `add_time`, `reply_id`, `user_id`) VALUES ('" + details + "','" + addTime + "','" + replyID + "','" + userID + "')";
		database.query(queryStr, [], (data) => {
			res.send({OK: true, msg: "回复成功"});
		});
	} else {
		res.send({OK: false, msg: "请登录"});
	};
}



