import { useCart } from "../context/CartContext";

const CrowdLevel = () => {
  const { ordersCount } = useCart();

  let level = "Low";
  let color = "bg-green-500";

  if (ordersCount > 5 && ordersCount <= 12) {
    level = "Medium";
    color = "bg-yellow-500";
  } else if (ordersCount > 12) {
    level = "High";
    color = "bg-red-600";
  }

  return (
    <div className="flex items-center gap-3 p-4 border rounded-lg w-fit">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <p className="font-semibold">
        Crowd Level: <span className="font-bold">{level}</span>
      </p>
    </div>
  );
};

export default CrowdLevel;
