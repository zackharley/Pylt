const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	admins: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}],
	projects: {
		type: Array,
		default: [],
		project: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project'
		}
	}
});

module.exports = organizationSchema;
