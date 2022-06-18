import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Context
import ProductsProvider from "./Providers/Context/products_context";
import FilterProvider from "./Providers/Context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>
);
