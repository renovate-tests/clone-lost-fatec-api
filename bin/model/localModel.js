var Schema = require('mongoose').Schema

module.exports = db.model('local', new Schema(
  {
    descricao: { type: String, default: '', trim: true }
  }))
