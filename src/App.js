import React from "react";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-Router-Dom
import { Navigate, Route, Routes } from "react-router-dom";
// Components
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import FavoriteList from "./Components/FavoriteList";
import CartPage from "./Pages/CartPage";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="favorites" element={<FavoriteList />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
