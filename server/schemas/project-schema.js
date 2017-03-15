const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	users: [{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	}],
	assets: [{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Asset'
	}],
	image: {
		type: String,
		required: true
	}
});

module.exports = projectSchema;
