const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
	_id: {
		index: true,
		unique: true,
		assetNumber: {
			type: Number,
			required: true
		},
		revision: {
			type: Number,
			required: true,
			default: 1
		}
	},
	url: {
		type: String,
		required: true
	}
});

module.exports = assetSchema;
