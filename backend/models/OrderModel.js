const mongoose = require('mongoose');

const OrdersSchema = require('../schema/OrdersSchema');

module.exports = mongoose.model("Order", OrdersSchema);