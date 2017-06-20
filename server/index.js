process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const config = require('./configs/index')
const co = require('co')
const app = require('koa')()
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const router = require('koa-router')({
  prefix: config.app.adminPath
})
const log4js = require('koa-log4')
const onerror = require('koa-onerror')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const controllers = require('./controllers/index.js')

// 如果你的node版本高于4.0 ,可以使用node自带promise
mongoose.Promise = global.Promise
jwt.co_verify = function (jwtString, secretOrPublicKey, options) {
  return function (cb) {
    jwt.verify(jwtString, secretOrPublicKey, options, cb)
  }
}

mongoose.connect(config.mongoConfig.url, config.mongoConfig.opts)
/**
 * 将config注入中间件的ctx
 * */
app.context.config = config
app.logger = log4js.getLogger('iBlog')
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))
app.use(cors({
  maxAge: 7 * 24 * 60 * 60,
  // 7 days 预请求头有效期
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
  headers: 'Content-Type, Accept, Authorization'
}))

mongoose.connection.on('error', function (err) {
  app.logger.fatal('connection mongodb err : ', err)
  process.exit(1)
})

/**
 * error信息优化
 * */
onerror(app)
app.on('error', function (err, ctx) {
  if ((ctx.status === 404 && err.status === undefined) || err.status === 500) {
    app.logger.error('server error', err)
    app.logger.error(ctx)
  }
  app.logger.error(err)
})
app.use(bodyParser())
router.get('/hello', function () {
  this.body = {name: 'name'}
})
co(function * () {
  yield controllers.init(router)
  app.use(router.routes())
  app.use(router.allowedMethods())
  app.listen(config.app.port)
  console.log(`app is listening on port ${config.app.port}`)
}).catch(function (err) {
  app.logger.error(err.stack)
})
