import { createContext, useContext, useState } from "react";
import axios from "axios";

const CartContext = createContext();

const API = "http://YOUR_IP:3000/api/orders"; // CHANGE IP

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ FIXED PLACE ORDER
  const placeOrder = async () => {
    if (cart.length === 0) return;

    try {
      await axios.post(API, {
        items: cart.map((item) => `${item.name} x${item.qty}`)
      });

      setCart([]); // clear cart after success
      alert("Order placed successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Order failed ❌");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice, placeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
