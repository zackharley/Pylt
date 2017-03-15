const mongoose = require('mongoose');

module.exports = mongoose.model('Asset', require('./../schemas/asset-schema'));
