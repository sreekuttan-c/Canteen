import axios from "axios";

const API = "http://172.20.10.6:3000/api/orders";

export const placeOrder = async (cartItems) => {
  return axios.post(API, {
    items: cartItems.map(item => ({
      name: item.name,
      quantity: item.quantity
    }))
  });
};