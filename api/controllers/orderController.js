const Order = require("../models/order");

let tokenCounter = 100;

// USER UI → PLACE ORDER
exports.placeOrder = async (req, res) => {
  try {
    const { items } = req.body;

    const order = new Order({
      token: tokenCounter++,
      items
    });

    await order.save();

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
};

// STAFF UI → GET ALL ORDERS
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// STAFF UI → UPDATE STATUS
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update order" });
  }
};
