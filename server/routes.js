const user = require('./controller/user');
const theme = require('./controller/theme');
const postBar = require('./controller/post_bar');
const reply = require('./controller/reply');
const imgLibs = require('./controller/img_upload.js');

exports.urls = (server) => {

  // **************用户接口*************
  // 当前用户信息
  server.post('/user/currentUser', (req, res) => {
    user.currentUser(req, res);
  });

  // 登录
  server.post('/user/login', (req, res) => {
    user.login(req, res);
  });

  // 是否已经注册
  server.post('/user/isRegister', (req, res) => {
    user.isRegister(req, res);
  });

  // 注册
  server.post('/user/register', (req, res) => {
    user.register(req, res);
  });

  // 注销
  server.post('/user/logout', (req, res) => {
    user.logout(req, res);
  });

  // 修改密码
  server.post('/user/changePwd', (req, res) => {
    user.changePwd(req, res);
  });

  // 修改昵称
  server.post('/user/changeNickname', (req, res) => {
    user.changeNickname(req, res);
  });

  // 上传头像
  server.post('/user/uploadHeadThumb', (req, res) => {
    user.uploadHeadThumb(req, res);
  });

  // **************吧*************

  // 吧列表
  server.get('/theme/list', (req, res) => {
    theme.themeList(req, res);
  });
  // 吧详情
  server.get('/theme/details', (req, res) => {
    theme.themeDetails(req, res);
  });
  // 判断是否已经关注
  server.get('/theme/isCollect', (req, res) => {
    theme.currentThemeStatus(req, res);
  });
  // 关注贴吧
  server.get('/theme/collect', (req, res) => {
    theme.collectTheme(req, res);
  });
  // 关注的所有贴吧列表
  server.get('/theme/collectList', (req, res) => {
    theme.collectThemeList(req, res);
  });

  
  // **************帖子*************
  // 推荐列表
  server.get('/postBar/publishList', (req, res) => {
    postBar.publishList(req, res);
  });

  // 帖子列表
  server.get('/postBar/typeList', (req, res) => {
    postBar.typeList(req, res);
  });

  // 帖子详情
  server.get('/postBar/details', (req, res) => {
    postBar.details(req, res);
  });
  
  // 发帖
  server.post('/postBar/publish', (req, res) => {
    postBar.publish(req, res);
  });

  // **************回复*************

  // 回复
  server.post('/reply/post_reply', (req, res) => {
    reply.postReply(req, res);
  });

  // 回复->回复
  server.post('/reply/subReply', (req, res) => {
    reply.subReply(req, res);
  });

  // 列表
  server.get('/reply/list', (req, res) => {
    reply.list(req, res);
  });

  // *****************图片炒作*****************
    // 上传图片
  server.post('/imgUpload', (req, res) => {
    imgLibs.imgUpload(req, res);
  });

}