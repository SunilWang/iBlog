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
  // qiniu: {
  //   IMAGE_STYLE: '-sy_sunil_wang_01',
  //   ACCESS_KEY: '',
  //   SECRET_KEY: '',
  //   BUCKET: '',
  //   DOMAIN: ''
  // },
  qiniu: {
    IMAGE_STYLE: '-sy_sunil_wang_01',
    ACCESS_KEY: '1TyBsVj4kyIkVZjhjCzf0Ukh5mrddGeMYvyUIGld',
    SECRET_KEY: 'p1SukvLFMElAwR6TSNo9Tsf57UqxOi7gWjIlDL-F',
    BUCKET: 'iblog',
    DOMAIN: 'https://qnstatic.sunil.wang'
  }
}
