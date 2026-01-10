import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalPrice, placeOrder } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="p-6">Cart is empty</div>;
  }

  const handleOrder = async () => {
    await placeOrder();
    navigate("/order"); // user order status page
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-3 border p-3">
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => removeFromCart(item.id)}>−</button>
            <span>{item.qty}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
        </div>
      ))}

      <div className="font-bold mt-4">Total: ₹{totalPrice}</div>

      <button
        onClick={handleOrder}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;