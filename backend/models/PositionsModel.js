const mongoose = require('mongoose');

const PositionsSchema = require('../schema/PositionsSchema');

module.exports = mongoose.model("Position", PositionsSchema);