
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const meSchema = new Schema({
  content: String
}, {versionKey: false})
const me = mongoose.model('me', meSchema)

module.exports = me
