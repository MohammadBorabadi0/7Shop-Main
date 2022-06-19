import React, { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";

// Icons
import { FaBars } from "react-icons/fa";
import { BiSearch, BiHeart, BiCart } from "react-icons/bi";
import { HiUserRemove, HiUserAdd } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// Context
import { useCart } from "../Providers/Context/cart_context";
import { useFilter } from "../Providers/Context/filter_context";
import { CLEAR_SEARCH_BOX } from "../actions";
import { NavList } from "../utils/helper";
import Search from "./Search";

const MobileNavbar = () => {
  const { numberOfAmounts } = useCart();
  const { dispatch } = useFilter();
  const currentPathname = window.location.pathname;
  const navigate = useNavigate();

  //   useState
  const [activeSearchBox, setActiveSearchBox] = useState(false);
  const [activeNavList, setActiveNavList] = useState(NavList[0].id);

  const handleToggle = () => {
    setActiveSearchBox(!activeSearchBox);
    dispatch({ type: CLEAR_SEARCH_BOX });
  };

  //   {0-640px}
  return (
    <>
      <header className="flex md:hidden sticky bg-primary top-0 py-3 px-5 mb-5 items-center justify-between text-xl font-bold">
        <span className="cursor-pointer">
          <FaBars />
        </span>
        <Link to="/">
          <h2 className="text-2xl font-semibold cursor-pointer">
            <span className="text-orange-500 border-b-2 border-orange-500">
              7
            </span>
            Shop
          </h2>
        </Link>
        <div className="flex items-center gap-3">
          <section className="hidden sm:flex items-center gap-3">
            <button onClick={() => navigate("/favorites")}>
              <BiHeart size="25px" />
            </button>
            <div className="flex md:hidden items-center">
              <button className="flex items-center gap-2">
                <HiUserAdd size="25px" />
              </button>
            </div>
          </section>
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
      <div className="sm:hidden">{activeSearchBox ? <Search /> : null}</div>
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 w-full z-10 bg-white shadow-xl rounded-3xl px-3">
        <ul className="flex items-center justify-between px-12 py-4 text-lg">
          {NavList.map((item, index) => (
            <li key={item.id}>
              <NavLink to={item.link} onClick={() => setActiveNavList(item.id)}>
                <i
                  className={`${item.icon} ${
                    index !== activeNavList
                      ? "text-slate-400"
                      : "bg-slate-900 text-white p-2 rounded-md"
                  }`}
                ></i>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
