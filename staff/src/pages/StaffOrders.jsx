import { useEffect, useState } from "react";
import axios from "axios";

// 🔴 CHANGE IP IF BACKEND RUNS ELSEWHERE
const API_BASE = "http://172.20.10.6:3000";

const StaffOrders = () => {
  const [orders, setOrders] = useState([]);

  // 🔹 Fetch all orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/orders`);
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔹 Update order status
  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`${API_BASE}/api/orders/${id}`, {
        status: newStatus,
      });
      fetchOrders();
    } catch (err) {
      console.error("Failed to update order", err);
    }
  };

  // 🔹 Status label helper
  const getStatusLabel = (status) => {
    if (status === 0) return "Ordered";
    if (status === 1) return "Preparing";
    if (status === 2) return "Ready";
    if (status === 3) return "Collected";
    return "Unknown";
  };

  return (
    <div className="p-6 pt-28">
      <h2 className="text-3xl font-bold mb-6">Staff Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">Token</th>
              <th className="p-3 text-left">Items</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="p-3 font-bold">
                  #{order.token}
                </td>

                <td className="p-3">
                  {order.items.join(", ")}
                </td>

                <td className="p-3 font-semibold">
                  {getStatusLabel(order.status)}
                </td>

                <td className="p-3 text-center">
                  {order.status === 0 && (
                    <button
                      onClick={() => updateStatus(order._id, 1)}
                      className="bg-orange-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Start
                    </button>
                  )}

                  {order.status === 1 && (
                    <button
                      onClick={() => updateStatus(order._id, 2)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Ready
                    </button>
                  )}

                  {order.status === 2 && (
                    <button
                      onClick={() => updateStatus(order._id, 3)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Collected
                    </button>
                  )}

                  {order.status === 3 && (
                    <span className="text-gray-400">
                      Completed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No orders yet
          </p>
        )}
      </div>
    </div>
  );
};

export default StaffOrders;
