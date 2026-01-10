import React from "react";
import tkmLogo from "../assets/tkm.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Orders", path: "/order" },
    { name: "Revenue", path: "/revenue" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-4 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
            : "bg-orange-500 py-4"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={tkmLogo}
            alt="TKM Logo"
            className="h-9 w-9 object-contain"
          />
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-orange-100"
            }`}
          >
            TKMCE CANTEEN
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div
          className={`hidden md:flex items-center gap-6 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="hover:underline">
              {link.name}
            </Link>
          ))}

          <button
            className={`px-8 py-2.5 rounded-full ${
              isScrolled
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Login
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <svg
            onClick={() => setIsMenuOpen(true)}
            className={`h-6 w-6 cursor-pointer ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg transition-transform duration-300 md:hidden z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <button className="bg-black text-white px-8 py-2.5 rounded-full">
          Login
        </button>
      </div>

      <div className="pt-24 px-6">
        <h1 className="text-2xl font-semibold">
          Welcome to TKM Canteen
        </h1>
      </div>
    </>
  );
};

export default Navbar;