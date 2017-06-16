module.exports = {
  env: 'development',
  debug: true,
  mongoConfig: {
    url: 'mongodb://sunilwang:wangshu1990823@nodejs-shard-00-00-pbmvb.mongodb.net:27017,nodejs-shard-00-01-pbmvb.mongodb.net:27017,nodejs-shard-00-02-pbmvb.mongodb.net:27017/iBlog?ssl=true&replicaSet=Nodejs-shard-0&authSource=admin',
    opts: {
      user: '',
      pass: ''
    }
  },
  'jwt': {
    'cert': 'sunil-dev'
  }
}
