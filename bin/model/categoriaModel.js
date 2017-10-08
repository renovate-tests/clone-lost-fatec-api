var Schema = require('mongoose').Schema

module.exports = db.model('categorias', new Schema(
  {
    descricao: { type: String, default: '', trim: true }
  }))
