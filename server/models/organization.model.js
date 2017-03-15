const mongoose = require('mongoose');

module.exports = mongoose.model('Organization', require('./../schemas/organization-schema'));
