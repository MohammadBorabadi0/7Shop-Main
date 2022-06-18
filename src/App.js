import React from "react";

// Toastify
import { ToastContainer } from "react-toastify";

// React-Router-Dom
import { Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default App;
