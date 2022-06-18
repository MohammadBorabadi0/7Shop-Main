import React from "react";

// Actions
import { LOAD_PRODUCTS } from "../../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default filter_reducer;
