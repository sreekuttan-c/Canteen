import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StaffDashboard from "./pages/StaffDashboard";
import StaffOrders from "./pages/StaffOrders";
import StaffRevenue from "./pages/StaffRevenue";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<StaffDashboard />} />
        <Route path="/order" element={<StaffOrders />} />
        <Route path="/revenue" element={<StaffRevenue />} />
      </Routes>
    </>
  );
}

export default App;