import React, { createContext, useContext, useReducer } from "react";

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
  const [state, dispatch] = useReducer();

  return (
    <FilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

// custom Hook
export const useFilter = () => useContext(FilterContext);
