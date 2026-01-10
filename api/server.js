require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();

// ✅ Allow all devices (User UI + Staff UI)
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Test root route
app.get("/", (req, res) => {
  res.send("Backend is working");
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ------------------ ORDER STORAGE ------------------
let orders = [];
let orderId = 1;

// ------------------ ROUTES ------------------

// ✅ Place order (User UI)
app.post("/api/orders", (req, res) => {
  const { items, userType } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Invalid order" });
  }

  const order = {
    id: orderId++,
    items,
    userType: userType || "student",
    status: 0, // 0 = preparing, 1 = ready
    createdAt: new Date()
  };

  orders.push(order);
  res.json({ message: "Order placed successfully", order });
});

// ✅ Get all orders (Staff UI)
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

// ✅ Update order status (Staff UI)
app.patch("/api/orders/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const order = orders.find(o => o.id === id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.status = status;
  res.json({ message: "Order updated", order });
});

// ✅ Get single order (User UI)
app.get("/api/orders/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
});

// ✅ Crowd + wait time (Python math integration)
app.get("/api/orders/crowd", async (req, res) => {
  try {
    const activeOrders = orders.filter(o => o.status === 0).length;
    const avgPrepTime = 2; // minutes per order

    // 🔗 Call Python backend
    const response = await axios.post("http://172.20.10.6:8000/math", {
      activeOrders,
      avgPrepTime
    });

    res.json({
      totalOrders: activeOrders,
      waitTime: response.data.waitTime,
      crowdLevel: response.data.crowdLevel
    });

  } catch (error) {
    res.status(500).json({
      message: "Python backend not running"
    });
  }
});

// ------------------ START SERVER ------------------

// ✅ Listen on all IPs (important for User UI connection)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
