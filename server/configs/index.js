const path = require('path')
const serverRoot = path.dirname(__dirname)
const root = path.resolve(serverRoot, '../')
const staticDir = path.join(root, 'static')
const dev = require('./dev.js')
const fs = require('fs')
const _ = require('lodash')

// 默认生产环境
let config = {
  app: {
    name: 'SunilWang-iBolg',
    port: 3300,
    adminPath: '/api' // 后台路径
  },
  debug: false,
  env: 'production',
  mongoConfig: { // 数据库配置
    url: '',
    opts: {
      user: '',
      pass: ''
    }
  },
  'jwt': {
    'cert': 'SunilWang-iBolg'
  },
  dir: { // 目录配置
    root,
    log: path.join(__dirname, '..', 'logs'),
    server: serverRoot,
    static: staticDir,
    resource: path.join(serverRoot, 'resource'),
    upload: path.join(serverRoot, 'resource', 'upload')
  }
}

// 私有配置
if (process.env.NODE_ENV === 'production') {
  if (fs.existsSync(`${__dirname}/private.js`)) {
    config = _.merge(config, require('./private.js'))
  }
} else {
  // 本地调试环境
  config = _.merge(config, dev)
}

module.exports = config
