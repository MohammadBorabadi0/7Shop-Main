import React, { useState } from "react";

// Icons
import { BiSliderAlt } from "react-icons/bi";

// Components
import Filter from "./Filter";
import ProductItem from "./ProductItem";
// Layout
import Layout from "../Layout/Layout";
// Context
import { useFilter } from "../Providers/Context/filter_context";
import Sort from "./Sort";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filtered_products } = useFilter();

  return (
    <Layout>
      <div className="flex items-center justify-between mb-4 px-3 xl:px-0">
        <h4 className="text-sm lg:text-xl text-slate-400">
          {filtered_products.length} Products Found
        </h4>
        <div className="hidden lg:flex items-center gap-8">
          <button
            className="flex items-center gap-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "Hide Filters" : "Show Filters"} <BiSliderAlt />
          </button>
          <Sort />
        </div>
      </div>
      <main className="flex gap-4">
        {showFilter ? <Filter /> : null}
        <section className="flex-[5_5_0%]">
          <div
            className={`${
              filtered_products.length ? "grid" : "flex"
            } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
              !showFilter ? "xl:grid-cols-4" : null
            } gap-x-2 gap-y-8 px-3 xl:px-0`}
          >
            {filtered_products.length ? (
              filtered_products.map((item, index) => (
                <ProductItem key={item.id} product={item} index={index} />
              ))
            ) : (
              <div className="font-medium p-2 text-lg flex-1">
                <h2>Sorry, no products matched your search.</h2>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProductList;
