/**
	* 配置文件
	*/

const express = require('express'),
			bodyParser = require('body-parser'),
			cookieParser = require('cookie-parser'),
			cookieSession = require('cookie-session'),
			pathLib = require('path'),
			multer = require('multer'),
			multerObj = multer({dest: './upload'}),
			router = require('./routes'),
			server = express();

// 获取请求(get自带，主要是post和文件)
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(multerObj.any());

// cookie-session
server.use(cookieParser());

(function(){
	var keys = [];
	for ( let i = 0; i < 1000; i++) {
		keys[i] = 'lyw' + Math.random();
	}
	server.use(cookieSession({
		name: 'sess_id',
		keys: keys,
		maxAge: 60*3600*10000000000
	}));
})();

//集请求Url  配置路由文件的使用
router.urls(server);

//使用static中间件 制定public目录为静态资源目录,其中资源不会经过任何处理
server.use('/static', express.static(__dirname + '/public'));
server.use('/static', express.static(__dirname + '/upload'));

server.listen(6060, function() {
	console.log('服务器启动成功=====>http://localhost:6060');
});

module.exports = server;
