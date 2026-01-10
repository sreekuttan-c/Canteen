import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import FoodDetail from "./pages/FoodDetail";
import Cart from "./pages/Cart";
import OrderStatus from "./pages/OrderStatus";
import Home from "./pages/Home";






const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<FoodDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderStatus />} />
        <Route path="/" element={<Home />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
