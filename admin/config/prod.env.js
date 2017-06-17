var fs = require('fs')
var merge = require('webpack-merge')
var config = {
  NODE_ENV: '"development"',
  api: '"http://localhost:3300/api/"'
}

if (process.env.NODE_ENV === 'production') {
  if (fs.existsSync(`${__dirname}/private.js`)) {
    config = merge(config, require('./private.js'))
  }
}
module.exports = config
