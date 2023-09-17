import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Dummy App</div>
      <div className="navItems">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
