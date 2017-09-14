const pathLib = require('path');
const fs = require('fs');
const config = require('./libs/config');

exports.imgUpload = function(req, res) {
	let imgSrc = '';
	const currentImg = req.files[0];
	console.log(currentImg)
	const newName = currentImg.path + pathLib.parse(currentImg.originalname).ext;
	const returnImgSrc = config.static + currentImg.filename + pathLib.parse(currentImg.originalname).ext;
	fs.rename(currentImg.path, newName, function(err) {
		res.send({OK: true, body: {img_src: returnImgSrc}});
	});
}