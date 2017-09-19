const qiniu = require("qiniu");

const accessKey = 'Kve1h7nvbNMxeP-jnW490r71erSiEKORr0674zXY';
const secretKey = 'ua3oDsPLLnrga7Hu8z7taoXKgnb4CydRMwq2t0aV';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
bucket = 'post-bar';
const options = {
  scope: bucket,
};

exports.qiniuToken = (req, res) => {
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken=putPolicy.uploadToken(mac);
  res.send({
    token: uploadToken
  })
}
