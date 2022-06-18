import React, { useState } from "react";

// Icons
import { BiHeart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../Providers/Context/filter_context";

const ProductItem = ({ product, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { dispatch, favorites_products } = useFilter();
  const navigate = useNavigate();

  return (
    <section className="shadow-md hover:shadow-xl cursor-pointer rounded-md py-8 bg-white">
      <div className="flex justify-end items-center px-6">
        <BiHeart />
      </div>
      <div>
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="flex flex-col gap-2 text-center font-semibold px-4">
        <h3>{product.brand}</h3>
        <h4 className="text-lg text-slate-800 font-semibold">{product.name}</h4>
        <span className="text-orange-600">${product.price}</span>
      </div>
    </section>
  );
};

export default ProductItem;
