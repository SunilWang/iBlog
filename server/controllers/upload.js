
const qiniu = require('qiniu')
const os = require('os')
const config = require('../configs')
const qnConfig = config.qiniu
const mw = require('../middlewares/index.js')
const fs = require('fs')
const multer = require('koa-multer')

// 需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = qnConfig.ACCESS_KEY
qiniu.conf.SECRET_KEY = qnConfig.SECRET_KEY

module.exports.init = function (router) {
  router.post('/upload/attachment', multer({dest: os.tmpdir()}), uploadAttachment)
}

// 构建上传策略函数
function uptoken (bucket, key) {
  let putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key)
  return putPolicy.token()
}

// 构造上传函数
function uploadFile (uptoken, key, localFile) {
  let extra = new qiniu.io.PutExtra()

  return new Promise((resolve, reject) => {
    qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
      if (err) {
        return reject(err)
      }

      return resolve(ret)
    })
  })
}

function * uploadAttachment () {
  let file = this.req.files.file
  let originalname = file.originalname
  let filePath = file.path
  let token = uptoken(qnConfig.BUCKET, originalname)
  let res = yield uploadFile(token, originalname, filePath).catch((err) => {
    this.app.logger.error(err)
    return this.throw(400, err)
  })

  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath)
    } catch (e) {
      this.app.logger.warn(`Delete ${filePath} File Err!`)
    }
  }

  this.body = {filename: `${qnConfig.DOMAIN}/${res.key}`}
}
