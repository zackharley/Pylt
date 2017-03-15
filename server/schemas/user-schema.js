const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		index: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	avatar: String
});

module.exports = userSchema;
