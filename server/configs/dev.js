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
    IMAGE_STYLE: '-sy_sunil_wang_01',
    ACCESS_KEY: '',
    SECRET_KEY: '',
    BUCKET: '',
    DOMAIN: ''
  }
}
