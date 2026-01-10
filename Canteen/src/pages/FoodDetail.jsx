import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

// ✅ IMPORT SAME IMAGES
import vegSandwich from "../assets/sandwich.jpg";
import teaImg from "../assets/tea.jpg";
import samosaImg from "../assets/samosa.jpg";

const FoodDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  // ✅ SAME DATA AS MENU (WITH IMAGE)
  const foods = [
    {
      id: 1,
      name: "Veg Sandwich",
      price: 40,
      desc: "Fresh veg sandwich",
      image: vegSandwich,
    },
    {
      id: 2,
      name: "Tea",
      price: 10,
      desc: "Hot tea",
      image: teaImg,
    },
    {
      id: 3,
      name: "Samosa",
      price: 15,
      desc: "Crispy samosa",
      image: samosaImg,
    },
  ];

  const food = foods.find((f) => f.id === Number(id));

  if (!food) {
    return <div className="p-6">Food not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(food);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="p-6 max-w-md mx-auto relative">
      {/* ✅ IMAGE (FIXED SIZE) */}
      <div className="w-full h-[220px] flex justify-center items-center mb-4 border rounded-lg">
        <img
          src={food.image}
          alt={food.name}
          className="h-full object-contain"
        />
      </div>

      {/* TEXT */}
      <h2 className="text-2xl font-bold mb-1">{food.name}</h2>
      <p className="text-gray-600 mb-2">{food.desc}</p>
      <p className="text-lg font-semibold mb-4">₹{food.price}</p>

      {/* ADD TO CART */}
      <button
        onClick={handleAddToCart}
        className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
      >
        Add to Cart
      </button>

      {/* 🔔 TOAST */}
      {showToast && (
        <div className="absolute top-4 right-5 bg-green-600 text-white px-4 py-2 rounded shadow">
          ✓ {food.name} added to cart
        </div>
      )}
    </div>
  );
};

export default FoodDetail;
