import { Link } from "react-router-dom";
import sandwich from "../assets/sandwich.jpg";
import tea from "../assets/tea.jpg";
import samosa from "../assets/samosa.jpg";


const Menu = () => {
  const foods = [
    { id: 1, name: "Veg Sandwich", price: 40,image: sandwich,},
    { id: 2, name: "Tea", price: 10 ,image: tea,},
    { id: 3, name: "Samosa", price: 15,image: samosa,  },
  ];

  return (
    <div className="px-6 md:px-16">
      <h1 className="text-2xl font-bold my-6">Menu</h1>

      <div className="grid grid-cols-4 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <Link
            key={food.id}
            to={`/menu/${food.id}`}
            className="w-[220px] h-[250px] border rounded-xl 
                       flex flex-col items-center justify-between
                       p-4 hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover"
            />
            {/* NAME + PRICE */}
  <div className="text-center">
    <p className="font-semibold text-lg">
      {food.name}
    </p>
    <p className="text-gray-700">
      ₹{food.price}
    </p>
  </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
