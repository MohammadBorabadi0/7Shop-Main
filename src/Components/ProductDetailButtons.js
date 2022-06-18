import React from "react";

// Icons
import { FaHeart } from "react-icons/fa";
import { BiCart, BiHeart } from "react-icons/bi";

const ProductDetailButtons = () => {
  return (
    <section className="flex items-center gap-4">
      <div className="flex items-center justify-center bg-orange-500 hover:bg-white hover:text-orange-500 border-2 border-orange-500 text-white transition-colors duration-200 gap-2 md:text-lg px-3 py-1.5 font-bold cursor-pointer rounded-xl w-fit sm:px-6">
        <BiCart size="25px" />
        <button>Add To Cart</button>
      </div>
      <div
        className={`flex items-center justify-center text-white transition-colors duration-200 gap-2 md:text-lg px-3 py-1.5 font-bold cursor-pointer rounded-xl w-fit`}
      >
        <BiHeart size="25px" />
        <span className="hidden sm:flex">Add To Favorites</span>
      </div>
    </section>
  );
};

export default ProductDetailButtons;
