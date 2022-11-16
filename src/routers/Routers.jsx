import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Shop from "../pages/Shop/Shop";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Signup from "../pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";

import { Routes, Route, Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="accueil" />} />
      <Route path="accueil" element={<Home />} />
      <Route path="panier" element={<Cart />} />
      <Route path="favori" element={<Wishlist />} />
      <Route path="boutique" element={<Shop />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="boutique/:id" element={<ProductDetails />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
