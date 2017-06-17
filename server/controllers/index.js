const token = require('./token.js')
const tag = require('./tag.js')
const article = require('./article.js')
const draft = require('./draft.js')
const publication = require('./publication')
const me = require('./me')

module.exports.init = function * (router) {
  yield token.init(router)
  tag.init(router)
  article.init(router)
  draft.init(router)
  publication.init(router)
  yield me.init(router)

  // 指定404动作
  router.all('*', function * () {
    this.body = '您访问的地址不存在!'
  })
}
