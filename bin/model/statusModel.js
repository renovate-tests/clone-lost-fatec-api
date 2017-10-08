var Schema = require('mongoose').Schema

module.exports = db.model('status', new Schema(
  {
    descricao: { type: String, default: '', trim: true }
  }))
