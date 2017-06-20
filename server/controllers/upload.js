
// const mw = require('../middlewares/index.js')
const qiniu = require('qiniu')

// 需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'Access_Key'
qiniu.conf.SECRET_KEY = 'Secret_Key'

module.exports.init = function (router) {
  router.post('/upload/attachment', uploadAttachment)
}

function * uploadAttachment () {
  //let files = this.req.files

  //console.log(files)

//   if (this.method !== 'POST') {
//     this.throw(400, `没有找到请求方法`)
//   }
//   // multipart upload
//   let parts = parse(this)
//   let part
//   let filePath
// console.log(parts)
//   while ((part = yield parts)) {
//     let stream = fs.createWriteStream(path.join(os.tmpdir(), part.filename))
//     part.pipe(stream)
//     filePath = stream.path
//     console.log('uploading %s -> %s', part.filename, stream.path)
//   }

  this.body = {filename: ''}
}
