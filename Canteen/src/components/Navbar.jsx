import React from "react";
import { Link } from "react-router-dom";
import tkmLogo from "../assets/tkm.png";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  // 🔴 Total items for badge (sum of qty)
  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-orange-500 px-6 md:px-16 flex items-center justify-between h-16 z-50">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={tkmLogo}
            alt="TKM Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="text-white font-bold text-lg">
            TKM CANTEEN
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>

          {/* 🛒 CART WITH BADGE */}
          <Link to="/cart" className="relative">
            Cart

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/about">About</Link>

          <button className="bg-white text-black px-5 py-1.5 rounded-full">
            Login
          </button>
        </div>
      </nav>

      {/* SPACER SO CONTENT DOESN'T HIDE BEHIND NAVBAR */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
