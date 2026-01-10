const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  token: Number,
  items: [
    {
      name: String,
      quantity: Number
    }
  ],
  status: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
