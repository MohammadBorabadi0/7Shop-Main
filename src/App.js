import React from "react";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-Router-Dom
import { Navigate, Route, Routes } from "react-router-dom";
// Components
import ProductDetail from "./Components/ProductDetail";
import FavoriteList from "./Components/FavoriteList";
import CartPage from "./Pages/CartPage";
import ProfilePage from "./Pages/ProfilePage";
import ProductListPage from "./Pages/ProductListPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PrivateRoute from "./Components/PrivateRoute";
import PaymentPage from "./Pages/PaymentPage";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="payment" element={<PaymentPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="favorites" element={<FavoriteList />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<ProductListPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
