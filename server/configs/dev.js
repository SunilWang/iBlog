module.exports = {
  env: 'development',
  debug: true,
  mongoConfig: {
    url: 'mongodb://localhost:30000/iBlog',
    opts: {
      user: '',
      pass: ''
    }
  },
  'jwt': {
    'cert': 'sunil-dev'
  },
  qiniu: {
    ACCESS_KEY: '',
    SECRET_KEY: '',
    BUCKET: '',
    DOMAIN: ''
  }
}
