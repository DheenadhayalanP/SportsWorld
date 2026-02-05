import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import MyOrders from "./pages/MyOrders";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);

  // ✅ Check login status ONCE (for refresh case)
  useEffect(() => {
    axios.get("http://localhost:5000/me", { withCredentials: true })
      .then(res => {
        if (res.data.success) {
          setUser(res.data.user);
        }
      })
      .catch(() => setUser(null));
  }, []);
  
  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <div className="p-4"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-orders" 
          element={
            <PrivateRoute> <MyOrders /> </PrivateRoute>
           }/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
