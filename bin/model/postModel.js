var Schema = require('mongoose').Schema

module.exports = db.model('post', new Schema(
	{
		local: { type: Schema.Types.ObjectId, required: true, ref: 'local' },
		categoria: { type: Schema.Types.ObjectId, required: true, ref: 'categorias' },
		status: { type: Schema.Types.ObjectId, required: true, ref: 'status' },
		descricao: { type: String, default: '', required: true, trim: true },
		url: { type: String, default: '', trim: true },
	}))
