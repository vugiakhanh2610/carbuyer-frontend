import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 mb-5 font-medium">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-secondary py-2 px-4 rounded-3xl"
            : "text-secondary"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/brand"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-secondary py-2 px-4 rounded-3xl"
            : "text-secondary"
        }
      >
        Brands
      </NavLink>
    </header>
  );
};

export default Header;
