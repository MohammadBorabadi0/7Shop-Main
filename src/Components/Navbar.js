import React, { useState } from "react";

// React-Router-Dom
import { Link, useNavigate } from "react-router-dom";
// Icons
import { BiCart, BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
// Context
import { useFilter } from "../Providers/Context/filter_context";
import { useCart } from "../Providers/Context/cart_context";
import { CLEAR_SEARCH_BOX } from "../actions";
// Components
import Search from "./Search";

const Navbar = () => {
  const { dispatch } = useFilter();
  const { numberOfAmounts } = useCart();
  const navigate = useNavigate();
  const currentPathname = window.location.pathname;

  //   useState
  const [activeSearchBox, setActiveSearchBox] = useState(false);

  const handleToggle = () => {
    setActiveSearchBox(!activeSearchBox);
    dispatch({ type: CLEAR_SEARCH_BOX });
  };

  //   640px to up
  return (
    <>
      <header className="hidden md:flex items-center justify-between bg-primary sticky top-0 border-b px-3 py-2 mb-5 z-10">
        {/* Logo */}
        <Link to="/">
          <h2 className="text-2xl font-semibold">
            <span className="text-orange-500 border-b-2 my-1 inline-block border-orange-500">
              7
            </span>
            Shop
          </h2>
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition-colors duration-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500 transition-colors duration-100"
            >
              About Us
            </Link>
          </li>
          <li>
            <button className="hover:text-orange-500 transition-colors duration-100">
              Login
            </button>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/favorites")}>
            <BiHeart size="25px" />
          </button>
          <button onClick={() => navigate("/profile")}>
            <BiUser size="25px" />
          </button>
          {currentPathname === "/" ? (
            !activeSearchBox ? (
              <BiSearch
                size="25px"
                className="cursor-pointer"
                onClick={handleToggle}
              />
            ) : (
              <IoClose
                size="25px"
                className="cursor-pointer"
                onClick={handleToggle}
              />
            )
          ) : null}
          <span
            onClick={() => navigate("/cart")}
            className="block cursor-pointer relative"
          >
            <BiCart size="25px" />
            <span className="absolute top-[-10px] right-[-13px] bg-red-700 text-white px-1.5 rounded-md text-sm">
              {numberOfAmounts === 0 ? null : numberOfAmounts}
            </span>
          </span>
        </div>
      </header>
      <div className="hidden sm:flex">{activeSearchBox && <Search />}</div>
    </>
  );
};

export default Navbar;
