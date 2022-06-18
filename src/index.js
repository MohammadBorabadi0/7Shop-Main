import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Context
import ProductsProvider from "./Providers/Context/products_context";
import FilterProvider from "./Providers/Context/filter_context";
import CartProvider from "./Providers/Context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
);
