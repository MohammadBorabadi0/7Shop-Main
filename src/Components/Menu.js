import React from "react";

// React-Router-Dom
import { Link, useNavigate } from "react-router-dom";

// Icons
import { MdClose } from "react-icons/md";
// Context 
import { useUserContext } from "../Providers/Context/user_context";

const Menu = ({ activeMenu, setActiveMenu }) => {
  const { myUser, loginWithRedirect, logout } = useUserContext();

  return (
    <nav className="fixed inset-0 animate-navbar bg-primary z-10 p-4">
      <div className="flex items-center justify-between pb-4 mb-4 border-b">
        <Link to="/">
          <h2 className="text-2xl font-semibold cursor-pointer">
            <span className="text-orange-500 border-b-2 border-orange-500">
              7
            </span>
            Shop
          </h2>
        </Link>
        <button onClick={() => setActiveMenu(false)}>
          <MdClose size="30px" />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-2 text-lg font-medium">
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
            to="/favorites"
            className="hover:text-orange-500 transition-colors duration-100"
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-orange-500 transition-colors duration-100"
          >
            About
          </Link>
        </li>
        <li>
          {myUser ? (
            <button
              className="text-lg font-medium hover:text-orange-500 transition-colors duration-100"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          ) : (
            <button
              className="text-lg font-medium hover:text-orange-500 transition-colors duration-100"
              onClick={loginWithRedirect}
            >
              Login
            </button>
          )}
        </li>
        {myUser && (
          <li>
            <Link
              to="/checkout"
              className="hover:text-orange-500 transition-colors duration-100"
            >
              Checkout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
