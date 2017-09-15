# 小贴吧

Vue全家桶+nodejs+mysql打造的小贴吧，实现简单的贴吧功能（部分功能还在完善中）

## 预览

由于在开发期间没有部署在服务器上。可以查看视频演示地址：http://ow99hkq6k.bkt.clouddn.com/%E6%BC%94%E7%A4%BA%E8%A7%86%E9%A2%91.gif

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

## 使用方式

下载文件，web文件夹是客户端，server是服务端，
首先导入数据库
然后分别安装依赖npm install，安装好后，web控制台运行npm run dev,server控制台运行node server.js,即可启动
项目运行在http://localhost:8080/

## 截图
![](https://github.com/heikaimu/L-bar/raw/master/show/1.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/2.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/3.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/4.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/5.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/6.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/7.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/8.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/9.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/10.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/11.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/12.png)
![](https://github.com/heikaimu/L-bar/raw/master/show/13.png)

## 今后发展

* 完善图片发送（之前本来已经做了但是发现存放在自己服务器不太好，当图片太多的时候，服务器压力太大，于是想象到了上传图片到七牛服务器，保存返回的链接到* 对应数据库里就可以了，该功能正在实施中）
* 新消息提醒
* 签到，签到等级
* 关注吧友
* 点赞
