// post_bar.js
const database = require('./DB/database');
const publicJs = require('./libs/public');

// 推荐帖子
exports.publishList = (req, res) => {
	const sql = `
  SELECT a.ID,a.title,a.details,a.img,a.add_time,b.nickname,b.head_thumb,c.count,d.theme
	FROM post_bar AS a 
	LEFT JOIN (SELECT post_bar_id,COUNT(*) AS count FROM reply GROUP BY post_bar_id) AS c ON a.ID = c.post_bar_id
	INNER JOIN user AS b ON a.user_id = b.ID
	INNER JOIN theme AS d ON a.theme_id = d.ID
	ORDER BY a.add_time DESC
  `;
	database.query(sql, [], (data) => {
		res.send({
			code: 1,
			data: {
				post_bar: data
			}
		});
	});
}

// 分类帖子
exports.typeList = (req, res) => {
  const themeId = req.query.theme_id;
  const sql = `
  SELECT a.ID,a.title,a.details,a.img,a.add_time,b.nickname,b.head_thumb,c.count
  FROM post_bar AS a 
  LEFT JOIN (SELECT post_bar_id,COUNT(*) AS count FROM reply GROUP BY post_bar_id) AS c ON a.ID = c.post_bar_id
  INNER JOIN user AS b ON a.user_id = b.ID
  INNER JOIN theme AS d ON a.theme_id = d.ID
  WHERE a.theme_id = ?
  ORDER BY a.add_time DESC
  `;
  database.query(sql, [themeId], (data) => {
    res.send({
      code: 1,
      data: {
        post_bar: data
      }
    });
  });
}

// 我的帖子
exports.myBarList = (req, res) => {
	const userId = req.query.user_id;
	const sql = `
	  SELECT a.ID,a.title,a.details,a.img,a.add_time,b.nickname,b.head_thumb,c.count,d.theme
	  FROM post_bar AS a 
	  LEFT JOIN (SELECT post_bar_id,COUNT(*) AS count FROM reply GROUP BY post_bar_id) AS c ON a.ID = c.post_bar_id
	  INNER JOIN user AS b ON a.user_id = b.ID
	  INNER JOIN theme AS d ON a.theme_id = d.ID
	  WHERE a.user_id = ?
	  ORDER BY a.add_time DESC
  	`;
    database.query(sql, [userId], (data) => {
        res.send({
            code: 1,
            data: {
                post_bar: data
            }
        });
    });
}

// 发帖
exports.publish = (req, res) => {
	// 判断当前是否登录
	if (req.session.user) {
		const title = req.body.title;
		const details = req.body.details;
		const img = req.body.img;
		const addTime = publicJs.getNowDate();
		const userID = req.session.user.ID;
		const themeID = req.body.themeId;
		const queryStr = `
    INSERT INTO post_bar
    (title, details, img, add_time, user_id, theme_id)
    VALUES (?, ?, ?, ?, ?, ?)
    `;
		database.query(queryStr, [title, details, img, addTime, userID, themeID], (data) => {
			res.send({code: 1, msg: "发布成功"});
		});
	} else {
		res.send({code: 0, msg: "请登录"});
	};
}

// 帖子详情
exports.details = (req, res) => {
	const postBarID = req.query.post_bar_id;
	const queryStr = `
  SELECT a.*, b.acount, b.nickname, b.head_thumb, c.theme
  FROM post_bar AS a
  INNER JOIN user AS b ON a.user_id = b.ID
  LEFT JOIN theme AS c ON a.theme_id = c.ID
  WHERE a.ID = ?
  `;
	database.query(queryStr, [postBarID], (data) => {
		res.send({
			code: 1,
			data: {
				details: data[0]
			}
		});
	});
}
