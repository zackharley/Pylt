const mongoose = require('mongoose');

module.exports = mongoose.model('Project', require('./../schemas/project-schema'));
