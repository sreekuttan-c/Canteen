# 🍽️ Smart Canteen Queue Management System

A full-stack web application that helps customers order food from a canteen while allowing staff to manage orders, food availability, and waiting time in real time.

The project consists of:
- **Customer Website** (React + Vite)
- **Staff Website** (React + Vite)
- **Backend API** (Node.js + Express + MongoDB)
- **Python Module** for mathematical/revenue calculations

---

# 📁 Project Structure

```
Canteen/
│
├── public/
├── src/
├── package.json
├── vite.config.js
│
├── api/
│   ├── controllers/
│   │   └── orderController.js
│   ├── models/
│   │   └── order.js
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── python-math/
│   ├── main.py
│   └── __pycache__/
│
└── staff/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── StaffDashboard.jsx
    │   │   ├── StaffOrders.jsx
    │   │   └── StaffRevenue.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

---

# 🚀 Features

## 👨‍🍳 Customer Website

Customers can:

- View available food items
- See the remaining quantity of each food
- View estimated preparation time
- Check the current queue level
- Place food orders
- Receive a unique token number
- Track their order status

---

## 👩‍💼 Staff Website

Staff members can:

- View all customer orders
- Update order status
- Update estimated preparation time
- Update available food quantities
- Manage the order queue
- View revenue statistics
- Mark orders as completed

---

# 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Other

- Python (Revenue/Math calculations)

---


# 💻 Project Modules

## Customer

- Food Menu
- Queue Level
- Waiting Time
- Order Token
- Order Tracking

## Staff

- Dashboard
- Orders
- Revenue
- Food Management
- Queue Management

---

# 📌 API Features

- Create Orders
- Get Orders
- Update Orders
- Delete Orders
- Update Food Availability
- Update Waiting Time

---

# 🎯 Advantages

- Reduces customer waiting time
- Improves queue management
- Real-time food availability
- Faster order processing
- Easy staff management
- Better customer experience

---

# 👨‍💻 Developed By

**Sreekuttan C ,Sidharth kishore **

Built using React, Node.js, Express.js, MongoDB, Vite, and Python.

---
