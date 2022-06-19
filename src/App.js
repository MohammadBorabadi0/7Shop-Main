import React from "react";

// Toastify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// React-Router-Dom
import { Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default App;
