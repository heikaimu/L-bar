// theme.js
const database = require('./DB/database.js');
// user.js

// 创建贴吧
exports.createNewBar = (req, res) => {
    if (req.session.user) {
        const barName = req.body.barName;
        const barImg = req.body.barImg;
        const sql = `INSERT INTO theme (theme, head_thumb) VALUES (?, ?)`;
        database.query(sql, [barName, barImg], () => {
            res.send({code: 1, msg: "创建成功"});
        });
    } else {
        res.send({code: 0, msg: "请登录"});
    }
}

// 吧列表
exports.themeList = (req, res) => {
  const keyword = typeof(req.query.keyword) === 'undefined' ? '' : req.query.keyword;
  const sql = `SELECT * FROM theme WHERE theme LIKE '%${keyword}%'`;
  database.query(sql, [], (data) => {
	res.send({
      code: 1,
      data: {
        theme_list: data
      }
    });
  });
}

// 吧详情
exports.themeDetails = (req, res) => {
  const themeId = typeof(req.query.theme_id) === 'undefined' ? '' : req.query.theme_id;
  const sql = `SELECT * FROM theme WHERE ID = ?`;
  database.query(sql, [themeId], (data) => {
    res.send({
      code: 1,
      data: {
        theme_details: data[0]
      }
    });
  });
}

// 当前用户在此吧的状态(0是未关注，1是关注)
exports.currentThemeStatus = (req, res) => {
  const themeId = req.query.theme_id;
  const userId = req.query.user_id;
  const sql = `
  SELECT * FROM collect_theme
  WHERE theme_id = ? && user_id = ?
  `;
  database.query(sql, [themeId, userId], (data) => {
    if (data.length !== 0) {
      res.send({
        code: 1,
        msg: '已关注'
      });
    } else {
      res.send({
        code: 0,
        msg: '未关注'
      });
    }
  });
}

// 关注贴吧
exports.collectTheme = (req, res) => {
  const themeId = req.query.theme_id;
  const userId = req.query.user_id;
  const sql = `
  INSERT INTO collect_theme
  (theme_id, user_id, level)
  VALUES (?, ?, 1)
  `;
  database.query(sql, [themeId, userId], (data) => {
    res.send({
      code: 1,
      msg: '关注成功'
    });
  });
}

// 获取用户关注的所有贴吧
exports.collectThemeList = (req, res) => {
  const userId = req.query.user_id;
  const sql = `
  SELECT collect_theme.*,theme.theme,theme.head_thumb
  FROM collect_theme LEFT JOIN theme ON collect_theme.theme_id = theme.ID
  WHERE user_id = ?
  `;
  database.query(sql, [userId], (data) => {
    const themeList = data;
    res.send({
      code: 1,
      data: {
        theme_list: themeList
      }
    });
  });
}