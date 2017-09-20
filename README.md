# 小贴吧

Vue全家桶+nodejs+mysql打造的小贴吧，实现简单的贴吧功能（部分功能还在完善中）

## 在线测试地址(谷歌浏览器浏览效果最佳)

http://39.108.140.212:3389

* 扫描二维码可以进入测试地址

![](https://github.com/heikaimu/L-bar/raw/master/show/qr.png)

## 技术栈
* **Vue2.0**：实现前端页面构建
* **Vuex**：实现不同组件间的状态共享
* **Vue-router**：页面路由切换,实现单页的核心
* **vueg**：页面复杂场景切换效果
* **vue-lazyload**：图片懒加载
* **axios**：一个基于 `Promise` 的 HTTP 库，向后端发起请求
* **ES6**、**ES7**、promise/async/await 处理异步
* **localStorage**：本地保存用户信息
* **Webpack**：模块打包，前端项目构建工具首选
* **stylus**：CSS预处理语言
* **Flex**：flex弹性布局，简单适配手机、PC端
* **CSS3**：CSS3过渡动画及样式
* **BetterScroll**：模拟原生app的列表滚动效果
* **nodejs**：服务器搭建
* **MySQL**：MySQL关系型数据库持久化数据（考虑到表与表之间关系复杂，需要多表查询，最复杂的时候是四表查询）
* **七牛**：图片上传地方三，能方便图片瘦身裁剪等各种功能

## 使用方式

下载文件，web文件夹，首先导入数据库，然后在web->server->controller->DB->database.js里面修改mysql的密码为你本机的mysql密码
安装依赖npm install，控制台运行npm run dev,即可启动

## 截图

* 登录注册

![](https://github.com/heikaimu/L-bar/raw/master/show/a.gif)

* 创建贴吧

![](https://github.com/heikaimu/L-bar/raw/master/show/b.gif)

* 发帖

![](https://github.com/heikaimu/L-bar/raw/master/show/c.gif)

* 回复

![](https://github.com/heikaimu/L-bar/raw/master/show/d.gif)

* 关注贴吧

![](https://github.com/heikaimu/L-bar/raw/master/show/e.gif)

* 修改头像

![](https://github.com/heikaimu/L-bar/raw/master/show/f.gif)

## 今后发展

* 图片点击放大查看
* 新消息提醒
* 签到，签到等级
* 关注吧友
* 点赞
