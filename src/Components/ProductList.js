import React, { useState } from "react";

// Components 
import Filter from "./Filter";
import ProductItem from "./ProductItem";
// Layout
import Layout from "../Layout/Layout";
// Context
import { useFilter } from "../Providers/Context/filter_context";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filtered_products } = useFilter();

  return (
    <Layout>
      <div className="flex items-center justify-between mb-4 px-3 xl:px-0">
        <h4 className="text-sm lg:text-xl text-slate-400">
          {filtered_products.length} Products Found
        </h4>
        <div className="hidden lg:flex items-center gap-8">Sort</div>
        <div className="flex lg:hidden items-center gap-2 border border-slate-400 rounded-full px-4 py-1 cursor-pointer">
          Filter
        </div>
      </div>
      <main className="flex gap-4">
        {showFilter ? <Filter /> : null}
        <section className="flex-[5_5_0%]">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
              !showFilter ? "xl:grid-cols-4" : null
            } gap-x-2 gap-y-8 px-3 xl:px-0`}
          >
            {filtered_products.map((item, index) => (
              <ProductItem key={item.id} product={item} index={index} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProductList;
