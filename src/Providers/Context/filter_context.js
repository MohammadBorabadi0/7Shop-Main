import React, { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_PRODUCTS } from "../../actions";

// Reducer
import filter_reducer from "../Reducers/filter_reducer";
import { useProducts } from "./products_context";

// InitialState
const initialState = {
  filtered_products: [],
  all_products: [],
  favorites_products: [],
  appliedFilters: [],
  filters: {
    gender: "",
    brand: "",
    category: "",
    size: "",
    search: "",
  },
  sort: "lowest",
};

// createContext
const FilterContext = createContext();

// Provider
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  const { products } = useProducts();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

// custom Hook
export const useFilter = () => useContext(FilterContext);
