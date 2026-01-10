import { useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { API_BASE } from "../config";

const OrderStatus = () => {
  const { order, setOrder } = useCart();

  useEffect(() => {
    if (!order?.id) return;

    const fetchStatus = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/orders/${order.id}`
        );

        setOrder((prev) => ({
          ...prev,
          status: res.data.status === 0 ? "PREPARING" : "READY",
        }));
      } catch (err) {
        console.error("Failed to fetch order status", err);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, [order?.id]);

  if (!order) return <div className="p-6">No active order</div>;

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Token #{order.id}</h2>

      <p className="mt-4 text-lg">
        Status: <b>{order.status}</b>
      </p>

      <div className="mt-6">
        {order.items.map((item, i) => (
          <p key={i}>
            {item.name} × {item.quantity}
          </p>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
